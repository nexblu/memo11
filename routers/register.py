from fastapi import APIRouter
from models import Register
from config.db import db
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os

load_dotenv()


router = APIRouter()


@router.post("/api/v1/memo11/register")
async def register(user: Register):
    if user.api_key == os.getenv("api_key"):
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
