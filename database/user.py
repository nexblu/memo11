from pymongo import MongoClient
import datetime
from .database import Database as DB


class User(DB):
    def __init__(self, uri) -> None:
        self.client = MongoClient(uri)
        self.database = self.client["code11"]
        self.collection = self.database["memo11"]

    async def insert(self, username, email, password):
        return self.collection.insert_one(
            {
                "username": username,
                "email": email,
                "password": password,
                "created_at": datetime.datetime.utcnow().timestamp(),
            }
        )

    async def delete(self):
        pass

    async def get(self, type, username, password, email=None):
        if type == "username":
            return self.collection.find_one(
                {"username": username, "password": password}
            )
        elif type == "email":
            return self.collection.find_one(
                {"username": username, "password": password, "email": email}
            )
        elif type == "password":
            return self.collection.find_one(
                {"username": username, "password": password, "email": email}
            )

    async def update(self):
        pass
