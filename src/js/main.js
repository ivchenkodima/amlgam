(function() {
    var app = angular.module('app', ['ngAnimate']);


    app.controller("TabController", function() {
        this.phones = phoneScreens;
        this.tab = 1;
        console.log(this.tab);

        this.isSet = function(checkTab) {
            return this.tab === checkTab;
        };

        this.setTab = function(setTab) {
            this.tab = setTab;
        };
    });
    var phoneScreens = [{
        title: "About",
        img: "img/first_screen.png",
        description: "About: Amlgam is a messaging app that connects user with his lovely messengers."
    }, {
        title: "Switching",
        img: "img/second_screen.png",
        description: "Switching: We want Amlgam to be simple for everybody. So now switching is 2 taps, no more."
    }, {
        title: "Custom answers",
        img: "img/third_screen.png",
        description: "Custom Answers: To be competitive is to be fast. Now you can use your custom messages for answering."
    }];

})();

