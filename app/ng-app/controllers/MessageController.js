'use strict';

greetingMainApp.controller('MessageController', ['$scope', '$controller', '$location', 'infoData', 'chooseGreeting',
    function ($scope, $controller, $location, infoData, chooseGreeting) {

        // $controller('MessageSubmitController', {$scope: $scope});

        $scope.allGreetings = infoData.getAllGreeting();
        console.log('allGreetings:', $scope.allGreetings);
        $scope.message = {info: ''};

        $scope.submitGreeting = function () {
            console.log('Inside function submitGreeting.');
            chooseGreeting.setGreeting($scope.message.info);
            // $rootScope.$emit("fakeMethod", {});// $scope.message.info setSubmittedGreeting($scope.message.info);
            // submitController.setSubmittedGreeting($scope.message.info);
            $location.replace();
            $location.url('/submitted');
            // $scope.setSubmittedGreeting($scope.message.info);

        }

    }
]);