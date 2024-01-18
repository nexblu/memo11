from fastapi import APIRouter
from models.user import User
from config.db import db
from fastapi.responses import JSONResponse


router = APIRouter()
