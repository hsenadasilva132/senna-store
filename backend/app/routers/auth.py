from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm

from sqlmodel import Session, select

from ..database import get_session
from ..models.user import User
from ..schemas.user import ( UserCreate, UserPublic, UserLogin )
from ..services.password import ( hash_password, verify_password )
from ..services.auth import ( create_access_token, get_current_user )

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)

@router.post(
    "/register",
    response_model=UserPublic, # Define o que a API pode devolver
    status_code=status.HTTP_201_CREATED
)
def register(user: UserCreate, session = Depends(get_session)):

    # 1. Verifica se o e-mail já está cadastrado
    existing_user = session.exec(
        select(User).where(
            User.email == user.email
        )
    ).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="E-mail já cadastrado."
        )

    # 2. Cria o usuário com a senha protegida.
    db_user = User(
        name=user.name,
        email=user.email,
        password_hash=hash_password(
            user.password
        )
    )

    # 3. Adiciona ao banco
    session.add(db_user)

    session.commit()

    # 4. Atualiza o objeto com o ID gerado  pelo PostgreSQL
    session.refresh(db_user)

    # 5. Retorna somente os dados públicos
    return db_user

@router.post("/login")
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
    session: Session = Depends(get_session)
):

    print("EMAIL RECEBIDO:", repr(form_data.username))

    db_user = session.exec(
        select(User).where(
            User.email == form_data.username
        )
    ).first()

    print("USUÁRIO ENCONTRADO:", db_user is not None)

    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha inválidos.",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )
    password_is_valid = verify_password(
        form_data.password,
        db_user.password_hash
    )

    print("SENHA VÁLIDA:", password_is_valid)

    if not password_is_valid:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="E-mail ou senha inválidos.",
            headers={
                "WWW-Authenticate": "Bearer"
            }
        )

    access_token = create_access_token(
        db_user.id
    )

    return {
        "access_token": access_token,
        "token-type": "bearer"
    }

@router.get(
    "/me",
    response_model=UserPublic
)
def get_me(
    current_user: User = Depends(get_current_user)
):
    return current_user