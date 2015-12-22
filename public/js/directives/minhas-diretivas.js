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

	module.directive('meuBotaoPerigo' , function(){
		var ddo = {};
		ddo.restric = "E";

		ddo.scope = {
			nome: '@nome', //@ cópia de  valor que sempre é uma string
			acao: '&acao'  //& tenta avaliar uma expressão dentro do contexto do controller
		};

		ddo.templateUrl = "js/directives/botao-perigo.html";

		return ddo;
	});