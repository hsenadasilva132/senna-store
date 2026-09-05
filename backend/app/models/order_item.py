from sqlmodel import Field, SQLModel

class OrderItem(SQLModel, table=True):
    __tablename__= "order_items"

    id: int | None = Field(
        default=None,
        primary_key=True
    )

    order_id: int = Field(
        foreign_key="orders.id",
        index=True
    )

    product_id: int

    product_name: str

    price: float

    quantity: int

    size: int