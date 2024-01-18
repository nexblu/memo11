from fastapi import APIRouter
from models.user import User
from config.db import db
from fastapi.responses import JSONResponse


router = APIRouter()


@router.post("/api/v1/memo11/register")
async def register(user: User):
    try:
        await db.insert(user.username, user.password)
    except:
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "failed register",
                        "status_code": 400,
                    }
                }
            ],
            status_code=400,
        )
    else:
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "success register",
                        "status_code": 200,
                    }
                }
            ],
            status_code=200,
        )
