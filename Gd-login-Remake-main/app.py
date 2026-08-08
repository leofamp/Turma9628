from flask import Flask, request, render_template
from bd import *
from detector import *
import werkzeug.security as wk

app = Flask(__name__)

@app.route("/")

def __main__():
    return render_template("index.html") 

@app.route("/cadastrar", methods=["POST"])

def cadastrar():
    nome = request.form.get("nome", "").strip()
    senha = request.form.get("senha","").strip()

    deu_certo = criar_conta(nome,senha)
    if deu_certo:
        return render_template("sucessoC.html")
    else:
        return render_template("errorC.html")


@app.route("/criarconta")

def a():
    return render_template("cadastrar.html")

@app.route("/entrar", methods=["POST"])

def entrar():
    nome = request.form.get("nome","").strip()
    senha = request.form.get("senha","").strip()

    conexao, cursor = conectar()
    usuario = buscar_usuario(nome,cursor)

    conexao.close()
    
    if usuario and wk.check_password_hash(usuario[2], senha):
        return render_template("sucessoE.html")
    else:
        return render_template("errorE.html")
    
    


if __name__ == "__main__":
    app.run(debug=True)

