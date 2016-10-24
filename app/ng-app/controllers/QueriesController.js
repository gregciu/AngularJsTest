'use strict'

greetingMainApp.controller('QueriesController',
    function QueriesController($scope, infoData) {
        $scope.greeting = infoData.getGreeting(1);//.stringify('\"','\'', '');
        // var transform = {'<>':'li', 'html':'Number ID: ${id} , infoContent: ${infoContent}, country: ${country}'};
        // var transform = {"<>":"li", "html":"infoContent: ${infoContent} country: ${country}"};
        // $scope.greeting = json2html.transform(infoData.getGreeting(1), transform);

        // var str = "sdfsdf";
        console.log('getOneGreeting: ', infoData.getGreeting(1));
        // str = infoData.getGreeting(1);
        // str.replace('\"','\'');
        // $scope.greeting = json2html.transform(infoData.getGreeting(1).replace('\"','\''), transform);

// *****************
//         var transform = {'<>':'li','html':'${name} (${age})'};
//
//         var data = [
//             {'name':'Bob','age':40},
//             {'name':'Frank','age':15},
//             {'name':'Bill','age':65},
//             {'name':'Robert','age':24}
//         ];
//
//         $scope.greeting = json2html.transform(data,transform);
    }
);