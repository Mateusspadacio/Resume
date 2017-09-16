(function(){
	angular.module('resume').component('skillBar', {
		bindings: {
			name: '@',
			progress: '@',
			img: '@'
		},
		template: `
		<label>
			{{$ctrl.name}}
			<img src="assets/{{$ctrl.img}}.png" class="img-resize">
		</label>
		<div class="progress">
			<div class="progress-bar progress-bar-info progress-bar-striped active" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: {{$ctrl.progress}}">
			<span class="sr-only">{{$ctrl.progress}}</span>
		</div><br>
		`
	});
})();