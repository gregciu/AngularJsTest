'use strict';

greetingMainApp.controller('MessageSubmitController', //['$scope', '$rootScope',
    function MessageSubmitController($scope, chooseGreeting) {

        $scope.submittedGreeting = chooseGreeting.getGreeting();

        // $scope.getSubmittedGreeting = function () {
        //     return $scope.submittedGreeting
        // };
        // $scope.setSubmittedGreeting = function (greeting) {
        //     console.log('Greeeting set to: ' + greeting);
        //     $scope.submittedGreeting = greeting;
        // };

        // $rootScope.$on("fakeMethod", function () {
        //     // $scope.setSubmittedGreeting();
        //     $scope.fakeMethod();
        // });
        //
        // $scope.fakeMethod = function () {
        //     console.log('Fake method called');
        // };


        // return {
        //     setSubmittedGreeting: function (greeting) {
        //         $scope.submittedGreeting = greeting;
        //     }
        //
        //     // getSubmittedGreeting: function(){
        //     //     return $scope.submittedGreeting
        //     // }
        //
        // }

    }
);