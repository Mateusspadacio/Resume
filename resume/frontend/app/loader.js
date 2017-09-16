angular.module('resume', ['ui.router', 'ngAnimate']);


//Active popover
$(function () {
  $('[data-toggle="popover"]').popover({html: true})
})