angular.module('minhasDiretivas',[])
	.directive('meuPainel', function() {
		
		var ddo = {};

		ddo.restric = "AE"; //Atribute Element

		ddo.scope = {
			titulo: '@titulo'
		};

		ddo.transclude = true ;

		ddo.templateUrl = 'js/directives/meu-painel.html'

		return ddo;

	});