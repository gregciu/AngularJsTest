'use strict'

greetingMainApp.controller('QueriesController',
    function QueriesController($scope, transformToHtml) {

        // var transform = {'<>':'li','html':'${name} (${age})'};
        // var data = [
        //     {'name':'Bob','age':40},
        //     {'name':'Frank','age':15},
        //     {'name':'Bill','age':65},
        //     {'name':'Robert','age':24}
        // ];
        // $scope.greeting = transformToHtml.transformJqueryToHtml(data,transform);

        $scope.greeting = transformToHtml.transformJqueryToHtml(1);
        console.log('greeting: ', $scope.greeting);

        $scope.getTransformedJqueryToHtml = function (fileNumber) {
            return transformToHtml.transformJqueryToHtml(fileNumber);
        };
        //TODO: origin
        // $scope.greeting = infoData.getGreeting(1);//.stringify('\"','\'', '');
        // console.log('getOneGreeting: ', infoData.getGreeting(1));

        // *************************
        // var transform = {'<>':'li', 'html':'Number ID: ${id} , infoContent: ${infoContent}, country: ${country}'};
        // var transform = {"<>":"li", "html":"infoContent: ${infoContent} country: ${country}"};
        // $scope.greeting = json2html.transform(infoData.getGreeting(1), transform);

        // var str = "sdfsdf";

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