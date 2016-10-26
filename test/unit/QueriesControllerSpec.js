'use strict';

describe('QueriesController', function () {

    var scope, mockTransformToHtml, $queriesControllerConstructor;

    beforeEach(module("greetingApp"));
    beforeEach(inject(function ($rootScope, $controller) {

        scope = $rootScope.$new();
        $queriesControllerConstructor = $controller;
        mockTransformToHtml = sinon.stub({
            transformJqueryToHtml: function () {
            }
        });
    }));

    it('should get html format data with the given fileNumber', function () {
        var fileNumber = 1;

        $queriesControllerConstructor('QueriesController', {'$scope': scope, transformToHtml: mockTransformToHtml});
        scope.getTransformedJqueryToHtml(fileNumber);
        expect(mockTransformToHtml.transformJqueryToHtml.calledWith(fileNumber)).toBe(true);

    });
});