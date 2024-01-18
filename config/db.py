from database.user import User
from dotenv import load_dotenv
import os

load_dotenv()


db = User(os.getenv("url"))
