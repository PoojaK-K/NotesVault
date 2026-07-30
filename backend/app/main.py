from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import engine, Base
from app.routes import auth, notes

# We will use Alembic for migrations, but this ensures tables are created if not using alembic initially
# Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.PROJECT_NAME, version=settings.VERSION)

# Allow CORS for local frontend testing
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, this should be specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, tags=["auth"])
app.include_router(notes.router, prefix="/notes", tags=["notes"])

@app.get("/")

def read_root():
    return {"message": "Welcome to NotesVault API"}
