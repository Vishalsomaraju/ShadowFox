from sqlalchemy import Column, Integer, Float, DateTime, ForeignKey, String
from datetime import datetime
from sqlalchemy.sql import func
from app.database import Base
from sqlalchemy.orm import relationship

class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    total_amount = Column(Float)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), server_default=func.now(), onupdate=func.now())
    status = Column(String, default="Pending")
    shipping_address = Column(String, nullable=False)
    payment_method = Column(String, nullable=False)
    user = relationship("User", back_populates="orders")
    product = relationship("Product", back_populates="order_items")
