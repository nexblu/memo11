from fastapi import APIRouter
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os
from models import Email
import smtplib
from email.message import EmailMessage
import ssl
from static import Misc


def send_email(email):
    email_address = "ditttt.tiktok@gmail.com"
    email_password = "orfd xfvf urcj arsb"
    em = EmailMessage()
    em["From"] = email_address
    em["To"] = f"{email}"
    em["Subject"] = "test"
    em.set_content("dwawdawadwadwa")

    context = ssl.create_default_context()

    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
        smtp.login(email_address, email_password)
        smtp.sendmail(email_address, email, em.as_string())


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
