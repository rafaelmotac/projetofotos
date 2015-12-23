var module = angular.module('meusServicos',['ngResource']);

module.factory('recursoFoto', function($resource){
	return $resource('/v1/fotos/:fotoId', null, {
		update: {
			method: 'PUT'
		}
	});
});