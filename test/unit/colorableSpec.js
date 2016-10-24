'use strict';

describe('colorable', function () {
    var el = [];
    var scope;
    beforeEach(module('greetingApp'));
    beforeEach(module('/templates/greeting.html'));
    beforeEach(inject(function ($compile, $rootScope) {

        scope = $rootScope.$new();
        scope.msg = [ 'other', 'Hello' ];
        scope.msg.forEach(function (element) {
            el.push(angular.element('<colorable msg=' + element + '>'))
        });

        $compile(el[0])(scope);
        $compile(el[1])(scope);
        scope.$digest();

    }));

    it('should change color to green if message other than "Welcome"', function () {
        expect(el[0][0].outerHTML).toContain('color: green');
    });

    it('should change color to red if message equals to "Welcome"', function () {
        expect(el[1][0].outerHTML).toContain('color: red');
    });
});