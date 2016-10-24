'use strict'

greetingMainApp.factory('chooseGreeting', function () {
   
    var greeting;
    
    return {
        getGreeting: function () {
            return greeting;
        },
        setGreeting: function (value) {
            greeting = value;
        }
    
    }
});