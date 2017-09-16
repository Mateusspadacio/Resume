(function(){
	angular.module('resume').controller('footerController', [footerController]);

	function footerController(){
		$('#go').animate({height: '70px'}, 1000);
	}


})();