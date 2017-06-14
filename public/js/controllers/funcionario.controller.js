angular.module('HumanManager').controller('FuncionarioController',
    function($scope, Funcionario, $routeParams) {

    	if ($routeParams.id) {
      	Funcionario.get({id: $routeParams.id},
        	function(funcionario) {
          	$scope.funcionario = funcionario;
          },
          function(erro) {
            $scope.mensagem = {
              texto: 'Funcionario não existe. Novo funcionario.'
            };
          }
      	);
      } else {
				$scope.funcionario = new Funcionario();
			}

			$scope.salva = function(){
				$scope.funcionario.$save()
					.then(function() {
						$scope.mensagem = {texto: 'Salvo com sucesso'};

						$scope.funcionario = new Funcionario();
					})
					.catch(function(erro){
						scope.mensagem = {texto: 'Não foi possivel salvar'};
				});
		};

    Funcionario.query(function(funcionarios){
      $scope.funcionarios = funcionarios;
    });
});
