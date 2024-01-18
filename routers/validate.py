from fastapi import APIRouter
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import os
import requests
import re

load_dotenv()


router = APIRouter()


@router.get("/api/v1/memo11/email_validate/{api_key}/{email}")
async def register(api_key: str, email: str):
    if api_key == os.getenv("api_key"):
        url = "https://community-neutrino-email-validate.p.rapidapi.com/email-validate"
        payload = {"email": email}
        headers = {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "24ed65ae48msha241654d8bc9256p17cb04jsn525ebae94435",
            "X-RapidAPI-Host": "community-neutrino-email-validate.p.rapidapi.com",
        }
        response = (requests.post(url, data=payload, headers=headers)).json()
        if response["valid"]:
            return JSONResponse(
                content=[
                    {
                        "code11": {
                            "status": "email valid",
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
                            "status": "email not valid",
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


@router.get("/api/v1/memo11/username_validate/{api_key}/{username}")
async def register(api_key: str, username: str):
    if api_key == os.getenv("api_key"):
        if not (5 <= len(username) <= 15):
            return JSONResponse(
                content=[
                    {
                        "code11": {
                            "status": "username must 1 - 15 char",
                            "status_code": 400,
                        }
                    }
                ],
                status_code=400,
            )
        if not re.match("^[a-zA-Z0-9]+$", username):
            return JSONResponse(
                content=[
                    {
                        "code11": {
                            "status": "username must 1 - 15 char",
                            "status_code": 400,
                        }
                    }
                ],
                status_code=400,
            )
        return JSONResponse(
            content=[
                {
                    "code11": {
                        "status": "username valid",
                        "status_code": 200,
                    }
                }
            ],
            status_code=200,
        )
