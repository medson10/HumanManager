angular.module('HumanManager').controller('FuncionariosController',

  function(Funcionario, $scope) {

    $scope.show = false;

    $scope.funcionarios = [];

    $scope.filtro = '';

    $scope.mensagem = {texto: ''};

    $scope.title = 'My App Title';

    function buscaFuncionarios() {
      Funcionario.query(
        function(funcionarios) {
          $scope.funcionarios = funcionarios;
          $scope.mensagem = {};
        },
        function(erro) {
          console.log(erro);
          $scope.mensagem = {
            texto: 'Não foi possível obter a lista'
          };
        }
      );
    }

    buscaFuncionarios();

    $scope.remove = function(funcionario) {
      Funcionario.delete({id: funcionario._id},
        buscaFuncionarios,
        function(erro) {
          $scope.mensagem ={
            texto: 'Não foi possível remover o funcionario'
          };
          console.log(erro);
        }
      );
    };
    angular.module('App', ['ngMaterial']);
});
