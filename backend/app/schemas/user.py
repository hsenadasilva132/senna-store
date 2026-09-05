# Definir quais dados a API aceita.

from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel): # Representa o que o usuário envia
    name: str
    email: EmailStr
    password: str

class UserPublic(BaseModel): # Representa o que podemos devolver
    id: int
    name: str
    email: EmailStr
# Não tem o password_hash, pois nunca é para devolver para o frontend

class UserLogin(BaseModel):
    email: EmailStr
    password: str

# validar o JWT recebido e descobrir de qual usuário
class Token(BaseModel):
    access_token: str
    token_type: str