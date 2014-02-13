/**
* Main App File
*/
'use strict';

angular.module('hyde', ['ngRoute', 'ngAnimate'])
	/**
	 * Sets main routing of app to provide dynamic loading of site content.
	 */
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
					var link = params.link;
					if (link.substr(link.length - 4, link.length) != 'html') {
						link += '/index.html';
					}
					return link;
				}
			});
	}])
	/**
	 * Override a-tag to prevent direct loading of partial. Links starting with 'http' and
	 * 'www' are let through to allow linking to third-party website
	 */
	.directive('a', ['$location', function($location) {
		return {
			restrict: 'E',
			link: function(scope, elem, attrs) {
				elem.on('click', function(e) {
					if (attrs.href.substr(0,4) == 'http' || attrs.href.substr(0,3) == 'www') {
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
	}])
	/**
	 * Directive for adding dynamic content. If you add a attribute to the additive-tag in your template,
	 * you can use angular or jquery inside the link-function to manipulate the DOM to your needs. The
	 * allows the change of the background-color for specific sites. As for now you have to set color for
	 * every page to change color back to original when leaving colored page.
	 */
	.directive('additive', [function() {
		return {
			restrict: 'E',
			scope: {
				bgColor: '@',
				color: '@'
			},
			link: function(scope, element, attrs) {
				$('body').animate({
					backgroundColor: scope.bgColor,
				 	borderTopColor: scope.color
				}, 1000);

				$('#header > .title > a').animate({
				 	'color': scope.color
				});
			}
		}
	}])
;