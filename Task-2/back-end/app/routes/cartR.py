from fastapi import APIRouter, Depends,HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import database, schemas
from app.models import CartItem
from app.models import User
from app.auth_utils import get_current_user

router = APIRouter(prefix="/cart")

@router.post("/", response_model=schemas.CartItemResponse)
def add_to_cart(item: schemas.CartItemCreate, db: Session = Depends(database.get_db), user:User=Depends(get_current_user)):
    cart_item = CartItem(user_id=user.id, product_id=item.product_id, quantity=item.quantity)
    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)
    return cart_item

@router.get("/", response_model=List[schemas.CartItemResponse])
def get_cart_items(db: Session = Depends(database.get_db), user:User=Depends(get_current_user)):
    return db.query(CartItem).filter(CartItem.user_id == user.id).all()

@router.delete("/{item_id}", response_model=schemas.CartItemResponse)
def remove_from_cart(item_id: int, db: Session = Depends(database.get_db), user:User=Depends(get_current_user)):
    cart_item = db.query(CartItem).filter(CartItem.id == item_id, CartItem.user_id == user.id).first()
    if not cart_item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    
    db.delete(cart_item)
    db.commit()
    return cart_item