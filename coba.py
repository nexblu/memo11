import smtplib
from email.message import EmailMessage
import ssl

email_address = "ditttt.tiktok@gmail.com"  # type Email
email_password = "orfd xfvf urcj arsb"  # If you do not have a gmail apps password, create a new app with using generate password. Check your apps and passwords https://myaccount.google.com/apppasswords

# create email
# msg = EmailMessage()
# msg["Subject"] = "Email subject"
# msg["From"] = email_address
# msg["To"] = "macex91289@rentaen.com"  # type Email
# msg.set_content(
#     f"""\
#     Name : dwaadwdaw
#     Email : dadw
#     Message : dadwaadw
#     """,
# )

# with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
#     smtp.login(email_address, email_password)
#     smtp.send_message(msg)
em = EmailMessage()
em["From"] = email_address
em["To"] = "macex91289@rentaen.com"
em["Subject"] = "test"
em.set_content("test")

context = ssl.create_default_context()

with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as smtp:
    smtp.login(email_address, email_password)
    smtp.sendmail(email_address, "macex91289@rentaen.com", em.as_string())
