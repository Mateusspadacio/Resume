(function(){
	angular.module('resume').controller('presentationController', ['showInfos', 'translate', presentationController]);

	function presentationController(showInfos, translate){
		const vm = this;
		vm.flyMessage = function(){
			$('#spaceship').popover({content: '<span style="color: green;">B<span style="color: #D7DF01;">R</span></span>', html: true, placement: 'top'});
			$('#spaceship').popover('show');
		}

		var guy = $('#guy');
		var fly = $('#fly');
		vm.flyMessage();
		$('#back').hide();
		var width = $(window).width();
		fly.css({'top': '60%'});
		$(document).keydown(function(e){
			showInfos.show('#name', 7);
			showInfos.show('#info', 6);
			if(guy.offset().left > width / 6){
				fly.css({'visibility': 'visible'});
				translate.translateLeft('#fly', width, 50000);
				setTimeout(function(){
					fly.css({'visibility': 'hidden'});
				}, 40000);
			}
		});
	}
})();