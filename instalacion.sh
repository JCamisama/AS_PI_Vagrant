#!/bin/bash

#Preparando CouchDB
echo vagrant | sudo -S cp ./resources/my-couchdb/local.ini /opt/couchdb/etc/
echo vagrant | sudo -S service couchdb restart
COUCHDB_USER="supervisor"
COUCHDB_PASSWORD="strongpassword"

#Preparando el Frontend en Angular/Node.js
cd resources/frontend-couchdb
# echo vagrant | sudo -S yum update -y
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
wget -q https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm install v14.18.2
npm cache clean -f
npm install -g -y n
npm install -g -y npm

export NG_CLI_ANALYTICS=ci
npm install -y
npm install -g -y @angular/cli@latest
# ng config -g cli.warnings.versionMismatch false
# ng serve --host 0.0.0.0





