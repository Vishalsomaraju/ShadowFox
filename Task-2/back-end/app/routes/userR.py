from fastapi import APIRouter, Depends,HTTPException
from sqlalchemy.orm import Session
from app import database, schemas
from app.models import User
from app.auth_utils import get_current_user
##needs update
router = APIRouter(prefix="/user")

@router.get("/me", response_model=schemas.UserResponse)
def get_profile(db: Session = Depends(database.get_db), user=Depends(get_current_user)):
    return user

@router.put("/me", response_model=schemas.UserResponse)
def update_profile(user_update: schemas.UserCreate, db: Session = Depends(database.get_db), user:User=Depends(get_current_user)):
    db_user = db.query(schemas.UserResponse).filter(schemas.UserResponse.id == user.id).first()
    if not db_user:
        raise HTTPException(status_code=404, detail="User not found")
    
    for key, value in user_update.dict(exclude_unset=True).items():
        setattr(db_user, key, value)
    
    db.commit()
    db.refresh(db_user)
    return db_user