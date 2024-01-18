from fastapi import APIRouter
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os
from models import Email
import smtplib
from email.message import EmailMessage
import ssl
from static import Misc


load_dotenv()


router = APIRouter()


@router.post("/api/v1/memo11/send_email")
async def send_email(email: Email):
    if email.api_key == os.getenv("api_key"):
        await Misc.send_email(email.email)
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "success send email",
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
