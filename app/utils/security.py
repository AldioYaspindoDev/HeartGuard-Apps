import jwt
import datetime
from argon2 import PasswordHasher
from flask import current_app

ph = PasswordHasher()

class Security:
    @staticmethod
    def hashed_password(password: str) -> str:
        return ph.hash(password)
    
    @staticmethod
    def verify_password(hashed: str, password: str) -> bool:
        try:
            return ph.verify(hashed, password)
        except: 
            return False
        
    @staticmethod
    def generate_token(id):
        payload = {
            'exp': datetime.datetime.utcnow() + current_app.config['JWT_ACCESS_TOKEN_EXPIRES'],
            'iat': datetime.datetime.utcnow(),
            'sub': id
        }
        return jwt.encode(payload, current_app.config['JWT_SECRET_KEY'], algorithm='HS256')