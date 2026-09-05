from datetime import datetime, timezone
from sqlmodel import Field, SQLModel

class Order(SQLModel, table=True):
    __tablename__= "orders"

    id: int | None = Field(
        default=None,
        primary_key=True
    )

    user_id: int = Field(
        foreign_key="users.id",
        index=True
    )

    total: float

    status: str = Field(
        default="pending",
        index=True
    )

    created_at: datetime = Field(
        default_factory=lambda: datetime.now(timezone.utc)
    )