from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class OrderCreate(BaseModel):
    total_amount: float
    shipping_address: str
    payment_method: str

class OrderResponse(OrderCreate):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime
    status: str

    class Config:
        orm_mode = True