from app import db
from datetime import datetime

class HearPrediction(db.Model):
    __tablename__ = "hear_prediction"

    id = db.Column(db.Integer, primary_key=True,)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    result = db.Column(db.Integer, nullable=False)
    propability = db.Column(db.Float, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)