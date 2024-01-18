from email.message import EmailMessage
import ssl
import smtplib
import os
import requests


class Misc:
    @staticmethod
    def send_email(email: str):
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
