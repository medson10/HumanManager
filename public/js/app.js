angular.module('HumanManager',['ngRoute', 'ngResource',  'ngMaterial'])
  .config(function($routeProvider) {

    $routeProvider.when('/funcionario', {
      templateUrl: 'partials/cadastro.html',
      controller: 'FuncionarioController'
    });

    $routeProvider.when('/funcionario/:funcionarioId', {
    	templateUrl: 'partials/funcionario.html',
    	controller: 'FuncionarioController'
    });


    $routeProvider.otherwise({redirectTo: '/funcionario'});
});
