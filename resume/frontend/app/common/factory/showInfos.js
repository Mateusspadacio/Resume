(function(){
	angular.module('resume').factory('showInfos', [showInfos]);


	function showInfos(){
		var guy = $('#guy');
		var width = $(window).width();
		function show(id, value){
			if(guy.offset().left > width / value){
				$(id).show('slow');
			}
		}

		return {show};
	}

})();