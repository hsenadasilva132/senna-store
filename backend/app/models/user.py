from datetime import datetime, timezone

from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    __tablename__ = "users"

    id: int | None = Field( # Chave primária e será gerado pelo PostgreSQL
        default=None,
        primary_key=True
    )

    name: str # Nome de usuário

    email: str = Field( # Será único, garante os dois usuários não podem ter o mesmo email.
        index=True, # Facilita consultas por email
        unique=True # Identidade usada no login
    )

    password_hash: str # Onde ficará armazenada o hash da senha, nunca a senha original

    created_at: datetime = Field( # Registra quando a conta foi criada.
        default_factory=lambda: datetime.now(timezone.utc)
    )