from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models

'''This will clear the table containing all the Scenarios in our database and then repopulate it using the csv file.
   This will run every time you initialise Flask, meaning the Scenarios will always be up-to-date, but Flask will initialise slower.'''
import app.csv_to_db as update
update.update_Scenario()
