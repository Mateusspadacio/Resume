(function(){
	angular.module('resume').controller('finalController', ['translate' ,finalController]);

	function finalController(translate){
		const vm = this;
		$('#go').hide();
		translate.translateHeight('#back', 70, 1000);


		vm.array = `It's a simple resume about my skills.`;
		vm.i = 0;
		vm.showLetters = function(){
			$('#finalMessage').append(vm.array[vm.i]);
			vm.i++;
		}

		setInterval(vm.showLetters, 150);

		setTimeout(function(){
			$('#thanks').fadeIn(2000);
		}, 5800);
	}
})();