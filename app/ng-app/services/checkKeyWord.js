'use strict'

greetingMainApp.factory('checkKeyWord', function () {
    return {
        buildColor: function (text) {
            switch(text){
                case 'Hello':
                    return 'red'
                default:
                    return 'green'
            }
        }
    }
});