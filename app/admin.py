from flask import Flask , render_template,request,redirect
from flask_sqlalchemy import SQLAlchemy
import os
from os.path import join, dirname, realpath
import csv
from app.models import Scenario
from app import app, db
from flask_migrate import Migrate

#Upload Folder
Folder_prompts = app/static/Uploads

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = Folder_prompts
migrate = Migrate(app, db)


@app.route('/admin',methods=['GET','POST'])
#@login_required
def admin():
    if request.method == 'POST':
        file = request.files['Prompts']
        if file.filename != '':
            prompts_path = os.path.join(app.config['UPLOAD_FOLDER'],file.filename)
            file.save(prompts_path)
        update_Scenario()
    return render_template("admin.html")

def load_csv(prompts_path):

    scenarios_list = []
    with open(prompts_path, newline='\n') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        for row in rows:
            scenarios_list.append(row)
#Remove header before returning    
    return(scenarios_list[1:])

def delete_scenarios():
    scenarios = Scenario.query.all()
    for scenario in scenarios:
        db.session.delete(scenario)

def upload_scenarios(scenarios):

    for scenario in scenarios:
        s = Scenario(id = int(scenario[0]), Category_Person = scenario[1], Prompt = scenario[2], Option_1 = scenario[3], Option_2 = scenario[4], Stat_Change_1 = scenario[5], Stat_Change_2 = scenario[6])
        db.session.add(s)
    
    db.session.commit()

def update_Scenario():
    scenarios = load_csv(prompts_path)
    delete_scenarios()
    upload_scenarios(scenarios)



