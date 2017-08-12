# nodejsBackend
Criação de um backend com NodeJS no CodeAnyWhere (Ubuntu clean)

A proposta aqui é registrar como é simples levantar um backend com nodeJS no CodeAnyWhere.

Passo 1 - Criar um container com Ubuntu vazio.

Passo 2 - Instalar o NodeJS 

url -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

Passo 3 - Instalar o Mongo

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

sudo apt-get update

sudo apt-get install -y mongodb-org

mkdir data

mongod --dbpath /home/cabox/workspace/data/


Passo 4 - Instalar o package.json

npm init

Passo 5 - Instalar as Dependencias

npm i express-query-int --save
npm i express body-parser mongoose node-restful mongoose-paginate lodash pm2 --save
npm i nodemon --save-dev

http://servidor-cptullio535438.codeanyapp.com:3003/api/cliente

