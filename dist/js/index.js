'use strict';

require("jquery");
require("angular");
require("angular-ui-router");
require("angularfire");
require("firebase");
require("lodash");

var app = angular.module('cameraApp', ['ui.router', "firebase"]);

app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('home', {
			url			: "/home?p",
			templateUrl	: "camera.html",
			controller 	: "allCameraCtrl",
			params		: {
				p : {
					value  : "1",
					squash : false
				}
			}
		}).state('s', {
			url 		: "/s",
			templateUrl	: "camera.html",
			controller	: "searchController"
		})

})
.service("cameraService", ["$firebase", "$firebaseArray", function($firebase, $firebaseArray) {
	var ref = new Firebase("https://openapi-cameras-nantes.firebaseio.com/cameras/cameras");

	this.getAll = function() {
		return $firebaseArray(ref);
	};

	this.getDecade = function(key) {
		if(key == 1) {
			return $firebaseArray(ref.orderByKey().startAt("701").endAt("709"));
		}
		else {
			var startKey = String(key * 10 + 690);
			var endKey	 = String(key * 10 + 700);

			return $firebaseArray(ref.orderByKey().startAt(startKey).endAt(endKey));
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
.controller("allCameraCtrl", function($scope, cameraService, $interval, $stateParams, $state, $location) {
	$location.path('home');

	$scope.page = $stateParams.p;

	$scope.nextPage = function() {
		var page = parseInt(window.location.href.slice(-1));
		(page > 0 && page <= 9) && $state.go("home", {p : page +1});
		(! page && page != 0) && $state.go("home", {p : 2});
	};

	$scope.prevPage = function() {
		var page = parseInt(window.location.href.slice(-1));
		(page > 1) && $state.go("home", {p : page -1});
		(page == 0) && $state.go("home", {p : 9});
	};

	
	var cameras = cameraService.getDecade($scope.page);

	cameras.$loaded().then(function(cams) {
		$scope.cameras = cams;
		
		$scope.$on("LastRepeaterElement", function() {
			$(".preloader-wrapper").remove();
			$('.materialboxed').materialbox();
			$interval(reloadWebcam, 1000);
			reloadWebcam();
			$("#secondPagination").show();
		});

		$(".next").click(function() {
			$scope.nextPage();
		});

		$(".prev").click(function() {
			$scope.prevPage();
		});
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