from pydantic import BaseModel


class Login(BaseModel):
    username: str
    password: str
    api_key: str
