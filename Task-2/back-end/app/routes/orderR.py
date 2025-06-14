from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import database, schemas
from app.models import Order
from app.models import User
from app.auth_utils import get_current_user

router = APIRouter(
    prefix="/orders",
    tags=["Orders"]
)

@router.post("/", response_model=schemas.OrderResponse)
def place_order(
    order_data: schemas.OrderCreate,
    db: Session = Depends(database.get_db),
    user: User = Depends(get_current_user)
):
    new_order = Order(user_id=user.id, **order_data.model_dump())
    db.add(new_order)
    db.commit()
    db.refresh(new_order)
    return new_order

@router.get("/", response_model=List[schemas.OrderResponse])
def get_user_orders(
    db: Session = Depends(database.get_db),
    user: User = Depends(get_current_user)
):
    return db.query(Order).filter(Order.user_id == user.id).all()

@router.get("/{order_id}", response_model=schemas.OrderResponse)
def get_order(
    order_id: int,
    db: Session = Depends(database.get_db),
    user: User = Depends(get_current_user)
):
    order = db.query(Order).filter(Order.id == order_id, Order.user_id == user.id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    return order

@router.delete("/{order_id}", response_model=schemas.OrderResponse)
def cancel_order(
    order_id: int,
    db: Session = Depends(database.get_db),
    user: User = Depends(get_current_user)
):
    order = db.query(Order).filter(Order.id == order_id, Order.user_id == user.id).first()
    if not order:
        raise HTTPException(status_code=404, detail="Order not found")
    
    db.delete(order)
    db.commit()
    return order    