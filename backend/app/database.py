import os

from dotenv import load_dotenv
from sqlmodel import create_engine, Session

# Lê o .env
load_dotenv() 

# Pega a variável
DATABASE_URL = os.getenv("DATABASE_URL")

if not DATABASE_URL:
    raise RuntimeError(
        "DATABASE_URL não foi encontrada no arquivo .env"
    )

# Cria o objeto que será resposável pela comunicação
# com o PostgreSQL.
engine = create_engine(
    DATABASE_URL,
    echo=True
)

# Cada requisição que precisar acessar o banco receba sua própria Session
# Ao terminar, seja encerrada.
def get_session():
    with Session(engine) as session:
        yield session