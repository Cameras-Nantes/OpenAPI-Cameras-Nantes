'use strict';

require("jquery");
require("angular");
require("angular-ui-router");
require("angularfire");
require("firebase");


var app = angular.module('cameraApp', ['ui.router', "firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/all");

	$stateProvider
		.state('all', {
			url			: "/all",
			templateUrl	: "camera.html",
			controller 	: "allCameraCtrl"
		})
});

app.directive('emitLastRepeaterElement', function() {
	return function(scope) {
		if(scope.$last) {
			scope.$emit('LastRepeaterElement');
		}
	};
});

app.controller("allCameraCtrl", function($scope, $firebase, $firebaseArray, $firebaseObject) {
	var ref = new Firebase("https://openapi-cameras-nantes.firebaseio.com/cameras/cameras");

	var cameras = $firebaseArray(ref);

	cameras.$loaded().then(function(cams) {
		$scope.cameras = cams;
		
		$scope.$on("LastRepeaterElement", function() {
			$("img").error(function() {
				$(this).parent().parent().parent().remove();
			})
			$('.materialboxed').materialbox();
		})
	})
});