from app import db


class Scenario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    Category_Person = db.Column(db.String(50))
    Prompt = db.Column(db.String(500))
    Option_1 = db.Column(db.String(100))
    Option_2 = db.Column(db.String(100))
    Stat_Change_1 = db.Column(db.String(50))
    Stat_Change_2 = db.Column(db.String(50))

    def __repr__(self):
        return 'Scenario is "{}"'.format(self.Prompt)

class Player_Game(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    game_score = db.Column(db.Integer)

    def __repr__(self):
        return '<User {}>'.format(self.name)
