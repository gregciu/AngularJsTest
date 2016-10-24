'use strict'

greetingMainApp.directive('colorable',  function (checkKeyWord) {

    return {
        restrict: 'E',
        replace: true,
        template: '<label>{{message.info}}</label>',
        link: function (scope, element, attrs, controller) {
            attrs.$observe('msg', function (newVal) {
                if(newVal){
                    attrs.$set('style', 'color: ' + checkKeyWord.buildColor(newVal));
                }
            });
        }

    }
});