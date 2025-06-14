from pydantic import BaseModel
from typing import Optional

class ProductCreate(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    image_url: Optional[str] = None
    category: str
    stock: int

class ProductResponse(ProductCreate):
    id: int

    class Config:
        orm_mode = True