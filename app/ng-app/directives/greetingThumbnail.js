'use strict';

greetingMainApp.directive('greetingThumbnail', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/greetingThumbnail.html',
        scope: {
            greeting: "="
        }
    }
});