import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "NotesVault"
    VERSION: str = "1.0.0"
    
    # Secret key for JWT token generation
    SECRET_KEY: str = os.getenv("SECRET_KEY", "b3e34b8c9d0b67482f3ef84fae9b3a72d42b9370f2095cc0b2db428389bb62c7")
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7 # 7 days
    
    # Database setting - default to sqlite if not provided
    DATABASE_URL: str = os.getenv("DATABASE_URL", "sqlite:///./notesvault.db")

    class Config:
        env_file = ".env"

settings = Settings()
