from pydantic import BaseModel, constr
from datetime import datetime
from typing import Optional

class NoteBase(BaseModel):
    title: constr(min_length=1)
    content: constr(min_length=1)

class NoteCreate(NoteBase):
    pass

class NoteUpdate(BaseModel):
    title: Optional[constr(min_length=1)] = None
    content: Optional[constr(min_length=1)] = None

class NoteOut(NoteBase):
    id: int
    created_at: datetime
    updated_at: datetime
    user_id: int

    class Config:
        from_attributes = True
