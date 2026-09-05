from pwdlib import PasswordHash

 # Usa as configurações recomendadas do pwlib
password_hash = PasswordHash.recommended()

# senha -> hash
def hash_password(password: str) -> str:
    return password_hash.hash(password)

# senha digitada -> hash armazenado
def verify_password(
        plain_password: str,
        hashed_password: str
) -> bool:
    return password_hash.verify(
        plain_password,
        hashed_password
    )