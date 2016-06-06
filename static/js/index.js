'use strict';

require("jquery");
require("angular");
require("angular-ui-router");
require("angularfire");
require("firebase");
require("lodash")


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

app.controller("allCameraCtrl", function($scope, $firebase, $firebaseArray, $interval) {
	var ref = new Firebase("https://openapi-cameras-nantes.firebaseio.com/cameras/cameras");

	var cameras = $firebaseArray(ref);

	cameras.$loaded().then(function(cams) {
		$scope.cameras = cams;
		
		$scope.$on("LastRepeaterElement", function() {
			$("img").error(function() {
				$(this).parent().parent().parent().remove();
			});
			$(".preloader-wrapper").remove();
			$('.materialboxed').materialbox();
			$interval(reloadWebcam, 1000);
			reloadWebcam();
		})
	})

	function reloadWebcam() {
		$scope.cameras = addTimestamp(cameras);
	}

	function addTimestamp(cameras) {
		return _.cloneDeep(cameras).map(function(camera) {
			camera.url += +new Date();
			return camera;
		});
	}
});