# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "kkdt/g7dev"
  config.vm.box_version = "0.1"
  config.vm.network "forwarded_port", host: 5984, guest: 5984
  config.vm.network "forwarded_port", host: 4200, guest: 4200
  config.vm.provision "file", source: "./resources", destination: "$HOME/resources"
  config.vm.provision "shell", privileged: false, path:"instalacion.sh", env: {"COUCHDB_USER"=>"supervisor", "COUCHDB_PASSWORD"=>"strongpassword"}
  config.vm.provision "shell", privileged: false, path:"iniciar_angular.sh", run: 'always'
end

