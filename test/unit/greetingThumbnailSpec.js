'use strict';

describe('greetingThumbnail', function () {

    var el;
    beforeEach(module('greetingApp'));
    beforeEach(module('/templates/directives/greetingThumbnail.html'));

    beforeEach(inject(function ($compile, $rootScope) {
        var scope = $rootScope.$new();
        scope.greeting = {
            id: 1,
            infoContent: 'Hello',
            country: 'EN'
        };

        el = angular.element('<greeting-thumbnail greeting="greeting"/>');
        $compile(el)(scope);
        scope.$digest();
        console.log(el[0].outerHTML);
    }));

    it('should bind data of allGreetings', function () {
        expect(el.text()).toContain('Hello');
    })
});