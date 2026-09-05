# Iniciar o Venv - venv/Scripts/activate
# Iniciar uvicorn = uvicorn app.main:app --reload
"""
PostgreSQL
↓
é o banco

engine
↓
é a conexão/configuração com o banco

Session
↓
é a unidade de trabalho usada para executar operações

SQLModel
↓
nos permite representar tabelas como classes Python
"""

# importação da biblioteca FastAPI
from fastapi import FastAPI
from sqlmodel import SQLModel

from .database import engine
from .models.user import User

from .models.order import Order
from .models.order_item import OrderItem

from .routers.auth import router as auth_router
from .routers.orders import router as orders_router

# Configurar CORS no FastAPI
# CORS (Permite que o React faça requisições para ele)
from fastapi.middleware.cors import CORSMiddleware



# Criando Aplicação
app = FastAPI(
    title="Senna Store API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine) 
# Olha para os modelos do SQLModel e cria tabelas que ainda não existem.

app.include_router(auth_router)
app.include_router(orders_router)

#Criando a primeira rota
@app.get("/")
def root():

    with engine.connect():

    
        return {
        "message": "FastAPI + PostgreSQL funcionando!"
    }