from pydantic import BaseModel


class Email(BaseModel):
    email: str
    api_key: str
