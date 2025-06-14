from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import authR, cartR, orderR, productR, userR

app = FastAPI(title="Flipkart Clone API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authR.router)
app.include_router(productR.router)
app.include_router(cartR.router)
app.include_router(orderR.router)
app.include_router(userR.router)

@app.get("/")
def read_root():
    return {"message": "Flipkart Clone API is running"}
