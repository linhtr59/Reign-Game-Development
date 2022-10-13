#still needs a bit of work

from flask import Flask, render_template, send_file
from flask_sqlalchemy import SQLAlchemy
import csv

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqllite:///db.sqllite3'
app.config['SQLALCHEMY_TRACLK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

@app.route('/',methods = ['GET','POST'])
def Index():
    with open()
    if request.method =='POST':
        file_prompts = request.file['file_prompts']
        read_file = csv.reader(file_prompts,delimiter=',')

        for row in read_file:
            prompts_data = ()


        upload = Upload(filename=file.prompts, data=file.read)
        db.session.add(upload)
        db.session.commit()

        return f'Uploaded:{Prompts}'
    return render_template('index.html')

@app.route('/download/<upload_id>')
def download(upload_id):
    upload = Upload.query.filter_by(id=upload_id)
    return send_file()


