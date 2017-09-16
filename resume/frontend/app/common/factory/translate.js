(function(){
	angular.module('resume').factory('translate', [translate]);

	function translate(){
		function translateLeft(id, pixels, time){
			$(id).animate({left: pixels+'px'}, time);
		}

		function translateRight(id, pixels, time){
			$(id).animate({right: pixels+'px'}, time);
		}

		function translateHeight(id, pixels, time){
			$(id).animate({height: pixels+'px'}, time);
		}

		return {translateLeft, translateRight, translateHeight};

	}
})();