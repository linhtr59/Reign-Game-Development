from app import app, db
from app.models import Scenario
import csv
import os

'''Setting path to csv file'''
cwd = os.getcwd()
path = cwd + r'\app\static\scenariosTOLOAD.csv'



'''Takes a file path to csv file, opens it and returns a list of lists'''
def load_csv(path):

    scenarios_list = []
    with open(path, newline='\n') as csvfile:
        rows = csv.reader(csvfile, delimiter=',')
        for row in rows:
            scenarios_list.append(row)

    #Remove header before returning    
    return(scenarios_list[1:])



'''Deletes all scenarios from the Scenario table in the db'''
def delete_scenarios():
    scenarios = Scenario.query.all()
    for scenario in scenarios:
        db.session.delete(scenario)



'''Uploads a list of scenarios into the db. Should only be run after clearing the db'''
def upload_scenarios(scenarios):

    for scenario in scenarios:
        s = Scenario(id = int(scenario[0]), Category_Person = scenario[1], Prompt = scenario[2], Option_1 = scenario[3], Option_2 = scenario[4], Stat_Change_1 = scenario[5], Stat_Change_2 = scenario[6])
        db.session.add(s)
    
    db.session.commit()
    


'''Load scenarios, clear database, and then repopulates with scenarios'''
def update_Scenario():
    scenarios = load_csv(path)
    delete_scenarios()
    upload_scenarios(scenarios)