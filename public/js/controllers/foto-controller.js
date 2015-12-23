angular.module('alurapic').controller('FotoController',function($scope, recursoFoto, $routeParams) {
	
	$scope.foto = {};
	$scope.mensagem = "";

	/*
	var recursoFoto = $resource('/v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	});
	*/

	if($routeParams.fotoId){
		recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
			console.log($routeParams.fotoId);
			$scope.foto = foto;
		}, function(erro){
			console.log(erro);
			$scope.mensagem = "Não foi possível obter a foto.";
		})
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
					$scope.mensagem = "Foto \""+$scope.foto.titulo+"\" alterada com sucesso!";
				}, function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível editar a foto \""+$scope.foto.foto.titulo;
				})
			
			}else{

				recursoFoto.save($scope.foto, function(){
					$scope.foto = {};
					$scope.mensagem = "Foto cadastrada com sucesso!";
				}, function(erro){
					$scope.mensagem = "Não foi possível cadastrar a imagem.";
				});
				
			}
			
		}
	};

	//Sem usar Resource

	/*
	if($routeParams.fotoId){
		$http.get("v1/fotos/"+ $routeParams.fotoId)
		.success(function(foto){
			console.log($routeParams.fotoId);
			$scope.foto = foto
		})
		.error(function(erro){
			console.log(erro);
			$scope.mensagem = "Não foi possível obter a foto.";
		})
	}

	$scope.submeter = function(){
		if($scope.formulario.$valid){
			if($scope.foto._id){
				$http.put("v1/fotos/"+$scope.foto._id, $scope.foto)
				.success(function(){
					$scope.mensagem = "Foto \""+$scope.foto.titulo+"\" alterada com sucesso!";
				})
				.error(function(erro){
					console.log(erro);
					$scope.mensagem = "Não foi possível editar a foto \""+$scope.foto.foto.titulo;
				});

			}else{

				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.foto = {};
					$scope.mensagem = "Foto cadastrada com sucesso!";
				})
				.error(function(erro){
					$scope.mensagem = "Não foi possível cadastrar a imagem."
				});
				
			}
			
		}
	};
	*/


});