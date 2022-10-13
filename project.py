from app import app, db
from app.models import Scenario, Player_Game

@app.shell_context_processor
def make_shell_context():
    return {'db':db, 'Scenario':Scenario, 'Player_Game':Player_Game}

