angular.module('alurapic').controller('FotosController',function($scope, recursoFoto){

	$scope.fotos = [];
	$scope.filtro = "";
	$scope.mensagem = "";

	//var recursoFoto = $resource("v1/fotos/:fotoId");

	recursoFoto.query(function(fotos){
		$scope.fotos = fotos;
	},function(erro){
		console.log(erro);
	}); 

	$scope.remover = function(foto){
		recursoFoto.delete({fotoId: foto._id},function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = "Foto \"" + foto.titulo + "\" removida com sucesso!";
			console.log("Foto \"" + foto.titulo + "\" removida com sucesso!");
		},function(erro){
			console.log(erro);
			$scope.mensagem = "Não foi possível remover a foto "+foto.tiulo;
			console.log("Não foi possível remover a foto "+foto.tiulo);
		});	
	};

	//Sem usar Resource
	/*
	$http.get('v1/fotos')
	.success(function(fotos){
		$scope.fotos = fotos;
	})
	.error(function(erro){
		console.log(erro);
	});
	*/

	/*
	$scope.remover = function  (foto) {
		$http.delete("v1/fotos/" + foto._id)
		.success(function(){
			var indiceFoto = $scope.fotos.indexOf(foto);
			$scope.fotos.splice(indiceFoto, 1);
			$scope.mensagem = "Foto \"" + foto.titulo + "\" removida com sucesso!";
			console.log("Foto \"" + foto.titulo + "\" removida com sucesso!");
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = "Não foi possível remover a foto "+foto.tiulo;
			console.log("Não foi possível remover a foto "+foto.tiulo);
		});
		
	};
	*/

});