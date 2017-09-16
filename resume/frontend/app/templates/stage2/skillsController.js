(function(){
	angular.module('resume').controller('skillsController', ['translate', skillsController]);

	function skillsController(translate){
		$('#back').show('slow');
		translate.translateHeight('#back', 70, 1000);
	}
})();