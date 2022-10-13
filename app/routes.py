from flask import render_template
from app import app, db


@app.route('/')
@app.route('/rules')
def rules():
    return render_template('Intro.html')


@app.route('/game')
def game():
    return render_template('interactive.html')


@app.route('/stats')
def stats():
    return render_template('stats page.html')
