from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List, Optional

from app.database import get_db
from app.models.note import Note
from app.models.user import User
from app.schemas.note import NoteCreate, NoteUpdate, NoteOut
from app.auth import get_current_user

router = APIRouter()

@router.get("/search", response_model=List[NoteOut])
def search_notes(
    q: str, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    # Real-time filtering by title or content
    notes = db.query(Note).filter(
        Note.user_id == current_user.id,
        (Note.title.ilike(f"%{q}%")) | (Note.content.ilike(f"%{q}%"))
    ).order_by(Note.created_at.desc()).all()
    return notes

@router.get("/", response_model=List[NoteOut])
def get_notes(db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    notes = db.query(Note).filter(Note.user_id == current_user.id).order_by(Note.created_at.desc()).all()
    return notes

@router.get("/{id}", response_model=NoteOut)
def get_note(id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    note = db.query(Note).filter(Note.id == id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    return note

@router.post("/", response_model=NoteOut, status_code=status.HTTP_201_CREATED)
def create_note(note: NoteCreate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    new_note = Note(**note.model_dump(), user_id=current_user.id)
    db.add(new_note)
    db.commit()
    db.refresh(new_note)
    return new_note

@router.put("/{id}", response_model=NoteOut)
def update_note(id: int, note_update: NoteUpdate, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    note = db.query(Note).filter(Note.id == id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    
    update_data = note_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(note, key, value)
        
    db.commit()
    db.refresh(note)
    return note

@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_note(id: int, db: Session = Depends(get_db), current_user: User = Depends(get_current_user)):
    note = db.query(Note).filter(Note.id == id, Note.user_id == current_user.id).first()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    
    db.delete(note)
    db.commit()
    return None
