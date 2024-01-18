from pydantic import BaseModel


class Password(BaseModel):
    username: str
    email: str
    password: str
    api_key: str
