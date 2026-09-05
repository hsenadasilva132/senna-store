from pydantic import BaseModel
from typing import List

class OrderItemCreate(BaseModel):
    product_id: int
    product_name: str
    price: float
    quantity: int
    size: int

class OrderCreate(BaseModel):
    items: List[OrderItemCreate]


class OrderItemPublic(BaseModel):
    id: int
    product_id: int
    product_name: str
    price: float
    quantity: int
    size: int

class OrderPublic(BaseModel):
    id: int
    user_id: int
    total: float
    status: str
    items: List[OrderItemPublic]    