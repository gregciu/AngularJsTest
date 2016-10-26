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
       saveGreeting: function (greeting) {
           greeting.id = 999;
           return infoResource.save(greeting);
       },
       getGreeting: function (greetingId) {
           return infoResource.get({id: greetingId});
       },
       getAllGreeting: function () {
           return infoResource.query();
       }
   };
});