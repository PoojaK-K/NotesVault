from pydantic import BaseModel, EmailStr, constr
from datetime import datetime

class UserBase(BaseModel):
    username: constr(min_length=3)
    email: EmailStr

class UserCreate(UserBase):
    password: constr(min_length=6)

class UserOut(UserBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None
