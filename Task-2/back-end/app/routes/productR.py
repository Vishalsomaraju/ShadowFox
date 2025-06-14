from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from app import database, schemas
from app.models import Product
from app.models import User
from app.auth_utils import get_current_user

router = APIRouter(prefix="/products")

@router.get("/", response_model=List[schemas.ProductResponse])
def get_products(db: Session = Depends(database.get_db)):
    return db.query(Product).all()

@router.post("/", response_model=schemas.ProductResponse)
def create_product(product: schemas.ProductCreate, db: Session = Depends(database.get_db),user: User=Depends(get_current_user)):
    new_product = Product(**product.model_dump())
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product
@router.get("/{product_id}", response_model=schemas.ProductResponse)
def get_product(product_id: int, db: Session = Depends(database.get_db)):
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product