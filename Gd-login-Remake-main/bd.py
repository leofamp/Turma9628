import sqlite3 as sql3

def conectar():
    conexao = sql3.connect("dados.db")
    cursor = conexao.cursor()

    cursor.execute("""
    CREATE TABLE IF NOT EXISTS usuarios(
    id INTEGER PRIMARY KEY,
    nome TEXT,
    senha TEXT
    )
    """)

    return conexao, cursor

def colocar_usuario(conexao,cursor,nome,senha):
    cursor.execute("""
    INSERT INTO usuarios(nome,senha)
    VALUES (?,?)
    """, (nome,senha))
    conexao.commit()

def buscar_usuario(nome, cursor):
    cursor.execute("""
    SELECT * FROM usuarios WHERE nome = ?
    """, (nome,))

    usuario = cursor.fetchone()

    return usuario