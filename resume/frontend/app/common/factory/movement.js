(function(){
angular.module('resume').factory('movement', ['$state', movement]);

function movement($state){
	var move = 0;
	var guy = $('#guy');
	var screen = $(window).width() - 40;
	var hscreen = $(window).height() - 120;
	var stage = 1;
	var end = true;
	function capMovements(){

		$(document).keydown(function(e){
			guy.popover('hide');

			if(e.keyCode == 39){
				if(guy.offset().left < screen - 20){
					move = move + 10;
					translate(move, 0.1);
				}

				if(stage >= 5){
					end = false;
				} else {
					end = true;
				}

				if(guy.offset().left > screen - 25 && end){
					move = 0;
					stage = stage + 1;
					if(end){
						changeStage(stage);
						translate(move, 0);
					}
				}
			}

			if(e.keyCode == 37){
				if(guy.offset().left >= 0){
					move = move - 10;
					translate(move, 0.1);
				}

				if(guy.offset().left < 0){
					if(stage > 1){
						move = screen;
						stage = stage - 1;
						translate(move, 0);
					}
					changeStage(stage);
				}
			}
		});
	}

	function translate(move, time){
		guy.css({'-webkit-transform': 'translate('+move+'px, '+hscreen+'px)', 
			'-ms-transform': 'translate('+move+'px, '+hscreen+'px)',
			'-moz-transform': 'translate('+move+'px, '+hscreen+'px)',
			'-o-transform': 'translate('+move+'px, '+hscreen+'px)',
			'-webkit-transition': 'all '+time+'s',
			'-ms-transition': 'all '+time+'s',
			'-moz-transition': 'all '+time+'s',
			'-o-transition': 'all '+time+'s'});
	}

	function changeStage(stage){
		$state.go('stage'+stage);
	}

	function wellcomeMessage(){
		guy.popover({ content: `<div style="font-weight: 600;"><b>Hello !</b> <span style="color: #01DFD7;">I'm Mateus's cloud</span><br> 
		I'll guide you in this little journey. Have fun ! <i class="fa fa-smile-o" aria-hidden="true"></i><br><br>
		Move me using keyboard arrows <br>
		<i class="fa fa-arrow-right" aria-hidden="true"></i>
		 or 
		<i class="fa fa-arrow-left" aria-hidden="true"></i>
		</div>`, 
		html: true, placement: "right"});

		guy.popover('show');
	}

	return {capMovements, wellcomeMessage};
}
})();
