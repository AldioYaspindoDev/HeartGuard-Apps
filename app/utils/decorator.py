from functools import wraps
from flask import request, jsonify, current_app
import jwt

def required_token(f):
    def decorator(*args, **kwargs):
        token = request.headers.get('Authorization')
        if not token:
            return jsonify({"message": "token kadaluarsa"})
        
        try:
            token = token.split(" ")[1]
            data = jwt.decode(token, current_app.config["JWT_SECRET_KEY"], algorithms="HS256")
            current_user_id = data['sub']
        except:
            return jsonify({
                "message" : "token invalid"
            }), 401
        
        return f(current_user_id, *args, **kwargs)
    
    return decorator