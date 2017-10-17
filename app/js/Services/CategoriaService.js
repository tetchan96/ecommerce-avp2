function CategoriaService($http, $window) {
    var listarTodos = function(callback, id) {
        $http.get('api/categoria/consultar.php?retornarImagem=sim').then(function(response) {
            callback(response.data);
        }, function(response) {
            alert("Erro: " + response.statusText);
        })
    };

    return {
        listarTodos: listarTodos
    };
}
