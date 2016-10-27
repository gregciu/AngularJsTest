'use strict';

greetingMainApp.filter('greeting', ['infoData', function (infoData) {
   return function (numberId) {
       switch (numberId){
           case 1:
           case 2: {

                console.log('getGreeting for value: ' + numberId, infoData.getGreeting(numberId).$promise.infoContent);
               return infoData.getGreeting(numberId).$promise.infoContent;
           }
           default:
               return 'No data found';
       }
   }
}]);
