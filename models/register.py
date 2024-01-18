from pydantic import BaseModel


class Register(BaseModel):
    username: str
    password: str
    api_key: str
