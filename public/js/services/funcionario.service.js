angular.module('HumanManager').factory('Funcionario', function($resource) {

	return $resource('/funcionarios/:id');
});
