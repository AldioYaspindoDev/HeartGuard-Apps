from app import db
from datetime import datetime

class User(db.model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    nohp = db.Column(db.String(12), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=True)
    predictions = db.relationship("HearPrediction", backref="user", lazy=True)

    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    