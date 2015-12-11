angular.module('alurapic').controller('FotosController',function($http, $scope){

	$scope.fotos = [];

	var promise = $http.get('v1/fotos');
	promise.then(function(retorno){

		$scope.fotos = retorno.data;

	}).catch(function(error){
		console.log(error);
	});

});