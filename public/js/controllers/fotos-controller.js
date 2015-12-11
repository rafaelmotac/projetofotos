angular.module('alurapic').controller('FotosController',function($http, $scope){

	$scope.fotos = [];

	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});

});