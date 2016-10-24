'use strict'

greetingMainApp.factory('infoData', function ($resource) {
    var infoResource = $resource('/data/:id', {id: '@id'}, {
        "getAll": {
            method: "GET",
            isArray: true,
            params: {sth: "bar"}
        }
    });

   return {
       getGreeting: function (greetingId) {
           return infoResource.get({id: greetingId});
       },
       getAllGreeting: function () {
           return infoResource.query();
       }
   };
});