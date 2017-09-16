(function(){
	angular.module('resume').config([
	'$stateProvider',
	'$urlRouterProvider',
	function($stateProvider, $urlRouterProvider){
		$stateProvider.state('stage1', {
			url: '/stage1',
			templateUrl: 'templates/stage1/presentation.html'
		}).state('stage2', {
			url: '/stage2',
			templateUrl: 'templates/stage2/skills.html'
		}).state('stage3', {
			url: '/stage3',
			templateUrl: 'templates/stage3/framework.html'
		}).state('stage4', {
			url: '/stage4',
			templateUrl: 'templates/stage4/dataBases.html'
		}).state('stage5', {
			url: '/stage5',
			templateUrl: 'templates/stage5/final.html'
		});

		$urlRouterProvider.otherwise('/stage1');
	}
	]);
})();