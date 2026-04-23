from app import db
from datetime import datetime

class HeartPrediction(db.Model):
    __tablename__ = "heart_predictions"

    id = db.Column(db.Integer, primary_key=True,)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    result = db.Column(db.Integer, nullable=False)
    probability = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)