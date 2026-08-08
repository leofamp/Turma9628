from bd import *
from werkzeug.security import generate_password_hash, check_password_hash

def criar_conta(nome,senha):

 deu_certo = True

 if not nome or not senha:
        deu_certo = False

 elif len(nome) < 4 or len(nome) > 15:
        deu_certo = False

 elif len(senha) < 8 or len(senha) > 15:
        deu_certo = False

 elif " " in nome or " " in senha:
        deu_certo = False

 else:
       conexao, cursor = conectar()
       senha = generate_password_hash(senha)
       colocar_usuario(conexao, cursor, nome, senha)
       conexao.close()
       return deu_certo
