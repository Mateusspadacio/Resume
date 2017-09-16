(function(){
	angular.module('resume').controller('bodyController', ['movement', presentationController]);

	function presentationController(movement){
		movement.capMovements();
		movement.wellcomeMessage();
	}
})();
