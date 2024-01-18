from fastapi import APIRouter
from models import Password
from config.db import db
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os

load_dotenv()


router = APIRouter()


@router.post("/api/v1/memo11/password")
async def register(user: Password):
    if user.api_key == os.getenv("api_key"):
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
    else:
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "you have not permissions",
                        "status_code": 401,
                    }
                }
            ],
            status_code=401,
        )
