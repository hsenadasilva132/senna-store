import os
import jwt

from datetime import datetime, timedelta, timezone

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from sqlmodel import Session, select

from dotenv import load_dotenv

from ..database import get_session
from ..models.user import User

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("JWT_ALGORITHM", "HS256")

if not SECRET_KEY:
    raise RuntimeError(
        "SECRET_KEY não foi encontrada no arquivo .env"
    )

ACCESS_TOKEN_EXPIRE_MINUTES = 60

# token deve vir no header Authorization
oauth2_scheme = OAuth2PasswordBearer( 
    tokenUrl="/auth/login"
)

def create_access_token(user_id: int) -> str:
    expire = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    payload = {
        "sub": str(user_id),
        "exp": expire
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

def get_current_user(
        token: str = Depends(oauth2_scheme),
        session: Session = Depends(get_session)
) -> User:
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Não foi possíevl validar as credenciais.",
        headers={
            "WWW-Authenticate": "Bearer"
        }
    )

# Verifica: assinatura do JWT; chave secreta; algoritmo e expiração.
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )

        user_id = payload.get("sub")

        if user_id is None:
            raise credentials_exception
        user_id = int(user_id)

    except (
        jwt.InvalidTokenError,
        ValueError,
        TypeError
    ):
        raise credentials_exception

    # Buscar usuário no banco
    user = session.get(
        User,
        user_id
    )

    if user is None:
        raise credentials_exception

    return user