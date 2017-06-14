angular.module('HumanManager',['ngRoute', 'ngResource',  'ngMaterial'])
  .config(function($routeProvider) {

    $routeProvider.when('/funcionarios', {
      templateUrl: 'partials/funcionarios.html',
      controller: 'FuncionariosController'
    });

    $routeProvider.when('/funcionarios/:id', {
    	templateUrl: 'partials/funcionario.html',
    	controller: 'FuncionarioController'
    });

    $routeProvider.when('/funcionario',{
      templateUrl: 'partials/funcionario.html',
      controller:'FuncionarioController'
    });

    $routeProvider.otherwise({redirectTo: '/funcionarios'});
});
