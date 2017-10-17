var app = angular.module('myApp', ["ngRoute"]);

app.service('CategoriaService', CategoriaService);

app.controller('BemVindoController', BemVindoController);


app.config(RouteConfig);


