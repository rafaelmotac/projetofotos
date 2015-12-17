var module = angular.module('minhasDiretivas',[]);
	module.directive('meuPainel', function() {
		
		var ddo = {};

		ddo.restric = "AE"; //Atribute Element

		ddo.scope = {
			titulo: '@titulo'
		};

		ddo.transclude = true ;

		ddo.templateUrl = 'js/directives/meu-painel.html';

		return ddo;

	});

	module.directive('minhaFoto', function () {
		var ddo = {};

		ddo.restric ="AE";

		ddo.scope = {
			url: '@url',
			titulo: '@titulo'
		};

		ddo.transclude = true ;

		ddo.templateUrl = 'js/directives/minha-foto.html';

		return ddo;

		
	});