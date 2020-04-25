# sistema-de-cadastro-livro
Trata-se de um pequeno sistema que permite o cadastro de livros em função de uma determinada categoria...

O sistema permite: cadastrar livros em função da categoria, listar, actualizar e deletar.
Também gera uma pequena estatística contabilística dos livros existente e suas categorias.

O Sistema, foi construído usando as seguintes tecnologias:

# frotend: Angular 9
# Back-end:  Laravel (php 7)
# Api é autenticada através do Json Web Token (JWT)

para listar, actualizar, criar ou deletar um item via Api, o usuário deve possuir um token valido...

Para o sistema rodar é processo é bastante simples, como pode ser visto nas instruções abaixo:

# Requisitos:
PHP >= 7.0

Angular CLI

Tanto os módulos do PHP como angular cli devem estar instalados e reconhecíveis via linha de comando.

# PASSO 0


# PASSO 1 (linha de comandos cmd)
Dentro do diretório frontend 

Executar: ng serve

Para rodar o servidor frontend

# PASSO 2
Dentro do directório backend 

Executar: php artisan serve

Para levantar o servidor backend, que estará na seguinte porta:
http://127.0.0.1:8000

# PASSO 3
Criar um banco de dados com o seguinte nome: __biblioteca

Executar o script da base de dados incluído nos arquivos deste projeto

# PASSO 4
Autenticação de usuário

Por padrão está definido o seguinte usuário

Username: papel@app.com

Password: password


O código fonte deste projecto também está disponível no meu github:
https://github.com/danieluac/sistema-de-cadastro-livro
