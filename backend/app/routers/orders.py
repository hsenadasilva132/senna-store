from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select

from ..database import get_session
from ..models.user import User
from ..models.order import Order
from ..models.order_item import OrderItem

from ..schemas.order import (
    OrderCreate,
    OrderPublic,
    OrderItemPublic
)

from ..services.auth import get_current_user

def build_order_response(
        order: Order,
        session: Session
):
    items = session.exec(
        select(OrderItem).where(
            OrderItem.order_id == order.id
        )
    ).all()

    return {
        "id": order.id,
        "user_id": order.user_id,
        "total": order.total,
        "status": order.status,
        "items": items
    }

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)

@router.post(
    "/",
    response_model=OrderPublic,
    status_code=status.HTTP_201_CREATED
)
def create_order(
    order_data: OrderCreate,
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session)
):
    if not order_data.items:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="O pedido precisa possuir pelo menos um item"
        )

    # calcula o total
    total = sum(
        item.price * item.quantity
        for item in order_data.items
    )

    # Cria o pedido
    db_order = Order(
        user_id=current_user.id,
        total=total,
        status="pending"
    )

    session.add(db_order)

    # ID do pedido
    session.flush()

    # cria os itens
    db_items = []

    for item in order_data.items:
        db_item = OrderItem(
            order_id=db_order.id,
            product_id=item.product_id,
            product_name=item.product_name,
            price=item.price,
            quantity=item.quantity,
            size=item.size
        )

        session.add(db_item)

        db_items.append(db_item)

    session.commit()

    session.refresh(db_order)

    for item in db_items:
        session.refresh(item)


    return {
        "id": db_order.id,
        "user_id": db_order.user_id,
        "total": db_order.total,
        "status": db_order.status,
        "items": db_items
    }


@router.get(
    "/",
    response_model = list[OrderPublic]
)
def get_my_orders(
    current_user: User = Depends(get_current_user),
    session: Session = Depends(get_session)
):
    orders = session.exec(
        select(Order)
        .where(Order.user_id == current_user.id)
        .order_by(Order.created_at.desc())
    ).all()

    result = []

    for order in orders:
        items = session.exec(
            select(OrderItem).where(
                OrderItem.order_id == order.id
            )
        ).all()

        result.append({
            "id": order.id,
            "user_id": order.user_id,
            "total": order.total,
            "status": order.status,
            "items": items
        })

    return result