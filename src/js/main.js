(function() {
    var app = angular.module('app', ['ngAnimate']);
    app.controller("TabController",['$scope',  function ($scope) {

        $scope.phoneScreens = [{
            title: "About",
            img: "img/first_screen.png",
            description: "Amlgam is a messaging app that connects user with his lovely messengers."
        }, {
            title: "Switching",
            img: "img/second_screen.png",
            description: "We want Amlgam to be simple for everybody. So now switching is 2 taps, no more."
        }, {
            title: "Custom answers",
            img: "img/third_screen.png",

            description: "To be competitive is to be fast. Now you can use your custom messages for answering."
        }];
        $scope.direction = 'left';
        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        }])
        .animation('.slide-animation', function () {
            return {
                beforeAddClass: function (element, className, done) {
                    var scope = element.scope();

                    if (className == 'ng-hide') {
                        var finishPoint = element.parent().width();
                        if(scope.direction !== 'right') {
                            finishPoint = -finishPoint;
                        }
                        TweenMax.fromTo(element, 0.5, {left:0, opacity: 1}, {left: -200, opacity: .5,"z-index":-3, onComplete: done });
                    }
                    else {
                        done();
                    }
                },
                removeClass: function (element, className, done) {
                    var scope = element.scope();

                    if (className == 'ng-hide') {
                        element.removeClass('ng-hide');

                        var startPoint = element.parent().width();
                        if(scope.direction === 'right') {
                            startPoint = -startPoint;
                        }
                        TweenMax.fromTo(element, 0.5, { left: 200,"z-index":-2 }, {left: 0, onComplete: done });
                    }
                    else {
                        done();
                    }
                }
            };
        });

    app.controller("EmailController", ['$scope', function ($scope) {
        $scope.user = null;
        var possible = "123456789";
        if(!unique)
            var unique = 0;
        for( var i=0; i < 10; i++ ){
            unique += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        if(unique) {
            mixpanel.identify(unique);
        }
        function sendMixPanel(newUser) {
            mixpanel.people.set({
                "$email": newUser,
                "$last_login": new Date()
            });
        }
        $scope.addUser = function() {
            if(!$scope.user) return;
            sendMixPanel($scope.user);
            return;
        };
    }]);

})();

