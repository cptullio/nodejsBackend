# nodejsBackend
Criação de um backend com NodeJS no CodeAnyWhere (Ubuntu clean)

A proposta aqui é registrar como é simples levantar um backend com nodeJS no CodeAnyWhere.

Passo 1 - Clonar este repositório num container ubuntu blank.

Passo 2 - Instalar o NodeJS 

curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

Passo 3 - Instalar o Mongo

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org

mkdir data

mongod --dbpath /home/cabox/workspace/data/


Passo 4 - Instalar as dependencias

npm install


Passo 5 - Adicionar o arquivo .env

module.exports = {
  authSecret: 'vocedevecolocarumachaveaqui'
}

Passo 6 - Executar o backend no ambiente de desenvolvimento

npm run dev

Passo 7 - Com postman criar um usuário

HTTP POST
http://......:3003/oapi/signup
name
email
password
confirm_password

A criação já retorna um token...

Passo 8 - Invocar os métodos "protegidos com o token retornado"


http://......:3003/api/cliente

Passando o token como Header:  Authorization










