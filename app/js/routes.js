function RouteConfig($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "app/pages/bemVindo.html",
            controller: "BemVindoController"
        })
        
        .otherwise({
            redirectTo: "/"
        });
}