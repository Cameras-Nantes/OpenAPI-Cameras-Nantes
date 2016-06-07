'use strict';

require("jquery");
require("angular");
require("angular-ui-router");
require("angularfire");
require("firebase");
require("lodash");

var app = angular.module('cameraApp', ['ui.router', "firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/all");

	$stateProvider
		.state('all', {
			url			: "/all",
			templateUrl	: "camera.html",
			controller 	: "allCameraCtrl"
		}).state('s', {
			url 		: "/s",
			templateUrl	: "camera.html",
			controller	: "searchController"
		})

})
.service("cameraService", ["$firebase", "$firebaseArray", function($firebase, $firebaseArray) {
	var ref = new Firebase("https://openapi-cameras-nantes.firebaseio.com/cameras/cameras");

	var cameras = $firebaseArray(ref);

	this.getAll = function() {
		return cameras;
	};

	this.getDecade = function(key) {
		if(key == 1) {
			return cameras.slice(1, 9);
		}
		else {
			return cameras.slice(key*10, key *10 -10);
		}

	}
}])
.directive('emitLastRepeaterElement', function() {
	return function(scope) {
		if(scope.$last) {
			scope.$emit('LastRepeaterElement');
		}
	};
})
.controller("allCameraCtrl", function($scope, cameraService, $interval) {
	
	var cameras = cameraService.getAll();

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
})
.controller("searchController", function($scope, $interval) {
	console.log("hehe");
});