from index import app
from flask import render_template
from funcoes import pegar_noticias, pegar_placar
@app.route('/')
def index():
    noticias = pegar_noticias()
    placar = pegar_placar()
    return render_template('home.html', noticias=noticias, placar=placar)

@app.route('/cad_login')
def login():
    return render_template('cad_login.html')