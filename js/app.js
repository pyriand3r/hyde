/**
* Main App File
*/
'use strict';

angular.module('dynamicJekyll', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/home.html'
			})
			.when('/home.html', {
				redirectTo: '/'
			})
			.when('/:link*', {
				templateUrl: function(params) {
					return params.link;
				}
			});
	}])
	.controller('mainCtrl', function($scope){
		$scope.pageflip = function() {
		};
	})
	.directive('a', ['$location', function($location) {
		return {
			restrict: 'E',
			link: function(scope, elem, attrs) {
				elem.on('click', function(e) {
					if (attrs.href.substr(0,4) == 'http') {
						return;
					} else {
						e.preventDefault();
						if (attrs.href.length == 1) {
							$location.path('/home.html');
						} else {
							$location.path(attrs.href);
						}
						scope.$apply();
					} 
				})
			}
		}
		console.log(arguments);
	}])
	.directive('additive', [function() {
		return {
			restrict: 'E',
			scope: {
				bgColor: '@'
			},
			link: function(scope, element, attrs) {
				 // var body = angular.element(document).find('body');
				 // angular.element(body).css('backgroundColor', scope.bgColor);

				 // $('body').css('backgroundColor', scope.bgColor);
				 $('body').animate({
				 	"background-color": scope.bgColor
				 }, 1000);
			}
		}
	}])
;