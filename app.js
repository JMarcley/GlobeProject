// app.js
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-about.html'
        })

        // nested list with custom controller
        .state('home.list', {
           /* url: '/list',*/
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
            }
        })

        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {

                // the main template will be placed here (relatively named)
                '': { templateUrl: 'partial-about.html' },

                // the child views will be defined here (absolutely named)
                'columnOne@about': { 
                    templateUrl: 'partial-status.html' 
                },

                // for column two, we'll define a separate controller 
                'columnTwo@about': { 
                    templateUrl: 'partial-options-nav.html',
                    controller: 'optionController',
                    controllerAs: 'options'
                },

                //option descriptions
                'descriptions@about': {
                    templateUrl: 'partial-options-descriptions.html',
                    controller: 'descritpionController',
                    controllerAs: 'descriptions'
                }
            }
            
        });
            
});

// let's define the option controller that we call up in the about state
/*routerApp.controller('optionController', function($scope) {
    this.options = climateSolutions;
});

routerApp.controller('descriptionController', function($scope) {
    this.choices = climateSolutions.choices;
});*/

routerApp.controller('MyCtrl', ['$scope', function ($scope) {
  // ...
}]);

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

routerApp.directive("solutionChoices", function() {

    return {
      restrict: "E",
      templateUrl: "partial-options-nav.html",

      controller: function() {
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

routerApp.directive("statusBox", function() {

    return {
        restrict: "E",
        templateUrl: "partial-status.html",

        controller: function() {
            this.metrics = metrics;
        },
        controllerAs: "status"
    };
});

routerApp.directive("gameMap", [/* "timeService"*/, function(/*timeService*/) {
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

                ctx.fillStyle = grd;
                ctx.fillRect(x-severity,y-severity,2*severity,2*severity);
            }

        }
    };
}]);

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
