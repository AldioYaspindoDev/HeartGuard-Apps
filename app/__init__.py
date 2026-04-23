import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from dotenv import load_dotenv
from config import Config

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    migrate.init_app(app, db)

    from app.models.user_model import User
    from app.models.prediction_model import HeartPrediction 

    from app.routes.user_routes import routes
    app.register_blueprint(routes, url_prefix='/api')

    with app.app_context():
        db.create_all()

    @app.route('/')
    def index():
        return {"message": "Applikasi berjalan dengan baik", "status": "running"}
    
    return app