 function BemVindoController($scope, CategoriaService) {
    $scope.listaCategorias = {};

     $scope.init = function() {
         CategoriaService.listarTodos(function(listaCategorias) {
             $scope.listaCategorias = listaCategorias;
         });
         console.log($scope.listaCategorias);
     }
 }
 