from fastapi import APIRouter
from models.user import User
from config.db import db
from fastapi.responses import JSONResponse


router = APIRouter()


@router.post("/api/v1/memo11/login")
async def register(user: User):
    if data := await db.get("username", user.username, user.password):
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "success login",
                        "status_code": 200,
                    }
                }
            ],
            status_code=200,
        )
    else:
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "failed login",
                        "status_code": 404,
                    }
                }
            ],
            status_code=404,
        )
