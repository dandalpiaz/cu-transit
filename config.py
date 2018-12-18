import os
from dotenv import load_dotenv

basedir = os.path.abspath(os.path.dirname(__file__))
load_dotenv(os.path.join(basedir, '.env'))

class Config(object):
    CUMTD_KEY = os.environ.get('CUMTD_KEY')
    TRACKING_ID = os.environ.get('TRACKING_ID')
    SSL_REDIRECT = True if os.environ.get('HEROKU') else False
