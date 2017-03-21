import uiRouter from 'angular-ui-router';

// UI-VIEW CONTROLLER
import controllerPrincipal from './controller/controllerPrincipal.js';
import acasaController from './controller/acasaController.js';
import legislatieController from './controller/legislatieController.js';
import indicatoareController from './controller/indicatoareController.js';
import informatiiController from './controller/informatiiController.js';
import intrebariController from './controller/intrebariController.js';
import videoController from './controller/videoController.js';
import chestionareController from './controller/chestionareController.js';

export default angular.module('modulParticular', ['ui.router'])
.controller('controllerPrincipal', controllerPrincipal)
.controller('acasaController', acasaController)
.controller('legislatieController', legislatieController)
.controller('indicatoareController', indicatoareController)
.controller('informatiiController', informatiiController)
.controller('intrebariController', intrebariController)
.controller('videoController', videoController)
.controller('chestionareController', chestionareController)

.config(['$qProvider','$urlRouterProvider','$stateProvider',function($qProvider, $urlRouterProvider,$stateProvider) {
	$qProvider.errorOnUnhandledRejections(false);
	$urlRouterProvider.otherwise('/acasa');
	$stateProvider
	.state('acasa', {
		url: '/acasa',
		templateUrl: '../fisiere/aplicatie/module/pagini/acasa.htm',
		controller:'acasaController'
	})
	.state('legislatie', {
		url: '/legislatie',
		templateUrl: '../fisiere/aplicatie/module/pagini/legislatie.htm',
		controller:'legislatieController'
	})
	.state('indicatoare', {
		url: '/indicatoare',
		templateUrl: '../fisiere/aplicatie/module/pagini/indicatoare.htm',
		controller:'indicatoareController'
	})
	.state('informatii', {
		url: '/informatii',
		templateUrl: '../fisiere/aplicatie/module/pagini/informatii.htm',
		controller:'informatiiController'
	})
	.state('intrebari', {
		url: '/intrebari',
		templateUrl: '../fisiere/aplicatie/module/pagini/intrebari.htm',
		controller:'intrebariController'
	})
	.state('video', {
		url: '/video',
		templateUrl: '../fisiere/aplicatie/module/pagini/video.htm',
		controller:'videoController'
	})
	.state('chestionare', {
		url: '/chestionare',
		templateUrl: '../fisiere/aplicatie/module/pagini/chestionare.htm',
		controller:'chestionareController'
	});
}]);
