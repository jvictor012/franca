from index import app
from flask import render_template
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/cad_login')
def login():
    return render_template('cad_login.html')