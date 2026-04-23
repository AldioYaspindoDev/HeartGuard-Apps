from flask import request, jsonify
from app.repositories.user_repository import UserRepository

class UserControllers:
    @staticmethod
    def register():
        data = request.get_json()
        if UserRepository.get_by_email(data['email']):
            return jsonify({"message" : "Email sudah digunakan"}), 400
        
        user = UserRepository.create(data)
        return jsonify({"message" : "Berhasil membuat user", "user_id": user.id}), 201
    
    @staticmethod
    def get_all_user():
        users = UserRepository.get_user()
        output = []
        for user in users:
            output.append({
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "nohp": user.nohp,
                "password": user.password
            })

        return jsonify(output), 200
    
    @staticmethod
    def get_user_by_id(id):
        users = UserRepository.get_by_id(id)
        if not users:
            return jsonify({"message": "user tidak ditemukan"}), 404 
        
        return jsonify({
            "id": users.id,
            "username": users.username,
            "email": users.email,
            "nohp": users.nohp,
            "password": users.password
        })
    
    @staticmethod
    def update_user(id):
        data = request.get_json()
        users = UserRepository.update_user(id, data)

        if not users:
            return jsonify({"message" : "user gagal di upadte"}), 400
        
        return jsonify({"message" : "user berhasil di update"}), 201
    
    @staticmethod
    def delete_user(id):
        users = UserRepository.delete_user(id)
        if not users:
            return jsonify({"message": "gagal menghapus user"}), 400
        
        return jsonify({"message": "berhasil menghapus user"}), 200