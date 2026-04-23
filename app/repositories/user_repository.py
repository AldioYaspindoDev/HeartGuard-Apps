from app.models.user_model import User
from app import db

class UserRepository:
    
    @staticmethod
    def get_by_email(email):
        return User.query.filter_by(email=email).first()
    
    @staticmethod
    def get_by_id(id):
        return User.query.get(id)

    @staticmethod
    def get_user():
        return User.query.all()
    
    @staticmethod
    def create(data):
        user = User(
            username = data['username'],
            email = data['email'],
            nohp = data['nohp'],
            password = data['password'],
        )
        db.session.add(user)
        db.session.commit()
        return user

    @staticmethod
    def update_user(id, data):
        user = User.query.get(id)
        if user:
            user.username = data.get('username', user.username)
            user.email = data.get('email', user.email)
            user.nohp = data.get('nohp', user.nohp)
            user.password = data.get('password', user.password)
            db.session.commit()

        return user
    
    @staticmethod
    def delete_user(id):
        user =  User.query.get(id)
        if user :
            db.session.delete(user)
            db.session.commit()
            return True
        return False