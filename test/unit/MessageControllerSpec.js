'use strict'

describe('MessageController', function () {
    var scope, mockInfoData, $messageControllerConstructor;

    beforeEach(module("greetingApp"));
    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();
        $messageControllerConstructor = $controller;
        mockInfoData = sinon.stub({getAllGreeting: function () {}});

    }));

    it('should set scope allGreetings to data retrieved by infoData.getAllGreeting', function () {
        var mockData = {};
        mockInfoData.getAllGreeting.returns(mockData);

        $messageControllerConstructor('MessageController', {'$scope':scope, infoData: mockInfoData});
        expect(scope.allGreetings).toBe(mockData);

    });
});