/**
* Main App File
*/
'use strict';

angular.module('dynamicJekyll', [])
	.controller('mainCtrl', function($scope, $location, $routeParams){
		console.log($routeParams);
		$scope.content = '/main.html';

		$scope.setContent = function(newVal, oldVal) {
			if (newVal == $scope.content) {
				return;
			}
			$scope.content = newVal;

			$location.path(newVal);
			if (newVal == '/main.html') {
				$location.path('/');
			}
			
			$scope.$apply();
		};
	})
	.controller('linkCtrl', function($scope, $location) {
		console.log('location: ', $location.path);
	})
	.directive('a', function() {
		return {
			restrict: 'E',
			link: function(scope, elem, attrs) {
				elem.on('click', function(e) {
					if (attrs.href.substr(0,4) == 'http') {
						return;
					} else {
						e.preventDefault();
						if (attrs.href.length == 1) {
							scope.$parent.setContent('/main.html');
						} else {
							scope.$parent.setContent(attrs.href);
						}
					} 
				})
			}
		}
		console.log(arguments);
	});
