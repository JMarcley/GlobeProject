"use strict";
(function() {
var globeProject = angular.module('globeProject', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.otherwise('/GlobeProject');

			$stateProvider
				.state('globeProject', {
					url: '/GlobeProject',
					templateUrl: 'main.html'
				})
				.state('home', {
		            url: '/GlobeProject',
		            templateUrl: 'main.html'
		        })
                .state('about', {
		            url: '/GlobeProject',
		            templateUrl: 'main.html'
		        });

		})

/*	angular.module('canvasCtrl', [])*/
		.directive("gameMap", function() {
		    return {

		        restrict: "A",
		        link: function(scope, element) {
		            var ctx = element[0].getContext('2d');

		            var bg = new Image();
		            bg.src = "images/world_map.jpg";

		            ctx.drawImage(bg,0,0);

		            var losAngeles = smog(250,200,50);

		            function smog(x,y,severity) {
		                var grd = ctx.createRadialGradient(x,y,severity*0.1,x,y,severity);
		                var opacity = .75;
		                grd.addColorStop(0,"brown");
		                grd.addColorStop(1,"transparent");

		                console.log('this ran');

		                ctx.fillStyle = grd;
		                ctx.fillRect(x-severity,y-severity,2*severity,2*severity);
		            }

		        }
		    };
		})

/*	angular.module('userActions', [])*/
		.directive("statusBox", function() {
		    return {
		        restrict: "E",
		        templateUrl: "game-status.html",

		        controller: function() {
		            this.metrics = metrics;
		        },
		        controllerAs: "status"
		    };
		})
		.directive("solutionChoices", function() {
		    return {
		      restrict: "E",
		      templateUrl: "user-choices-nav.html",

		      controller: function() {

		/*        var doesThisWork = initializeGame.getArtist();
		        console.log(doesThisWork);*/

		        this.options = climateSolutions;

		        this.tab = [1,0];

		        this.isSet = function(checkTab, index) {
		          return this.tab[index] === checkTab;
		        };

		        this.setTab = function(activeTab, index) {
		          this.tab[index] = activeTab;
		          if (index === 0) {
		            this.tab[1] = 0;
		          }
		        };
		      },

		      controllerAs: "options"

		    };
		});

var climateSolutions = [{
    type: 'Policy',
    choices: [{
        name: 'Policy Option 1',
        description: 'description for policy option 1'
    }, {
        name: 'Policy Option 2',
        description: 'description for policy option 2'
    }, {
        name: 'Policy Option 3',
        description: 'description for policy option 3'        
    }, {
        name: 'Policy Option 4',
        description: 'description for policy option 4'
    }]
}, {
    type: 'Technology',
    choices: [{
        name: 'Tech Option 1',
        description: 'description for tech option 1'
    }, {
        name: 'Tech Option 2',
        description: 'description for tech option 2'
    }]    
}, {
    type: 'Geoengineering',
    choices: [{
        name: 'Geo Option 1',
        description: 'description for geo option 1'
    }, {
        name: 'Geo Option 2',
        description: 'description for geo option 2'
    }, {
        name: 'Geo Option 3',
        description: 'description for geo option 3'        
    }]    
}];

var metrics = [{
    name: "Influence",
    value: 40,
    color: "aqua"
  }, {
    name: "Pollution",
    value: 60,
    color: "orange"
  }, {
    name: "Industrial Output",
    value: 75,
    color: "red"
  }]




})();

// let's define the option controller that we call up in the about state
/*routerApp.controller('optionController', function($scope) {
    this.options = climateSolutions;
});

routerApp.controller('descriptionController', function($scope) {
    this.choices = climateSolutions.choices;
});*/

/*routerApp.factory('initializeGame', function ($interval) {
  if (currentTime === undefined) {
    var currentTime = 0;
  }
  var frame = $interval(function() {
    currentTime = currentTime + 1;
  }, 30);

  service.getArtist = function(){
    return currentTime;
  }

  return service;
});*/

/*service("startGame", function() {
    this.initialize = function() {
            console.log("this is available in timeService");
    }
});*/

/*routerApp.service("startTest", [ 'startGame', function(startGame) {
    startGame.initialize();
}]);*/

/*routerApp.factory("timeService", [ '$scope', '$interval', 'startGame', function($scope, $interval, startGame) { //probably shouldnt be a controller
    $scope.frameTime = $interval( function () {

            startGame.initialize();

    }, 30);

    gametime.currentTime = function() {

    };
    return gametime;
}]);
*/
// make a canvas manager
/*routerApp.factory("MapManager", [ "$interval", function($interval) {

}]);*/