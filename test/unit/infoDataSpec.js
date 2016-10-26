'use strict';

describe('infoData', function () {

    var $httpBackend;
    beforeEach(module('greetingApp'));

    beforeEach(inject(function ($injector) {
        $httpBackend = $injector.get('$httpBackend');
    }));

    afterEach(
        function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        }
    );
    it('should perform GET request to /data/1 when getGreeting is called with value 1',
        inject(function (infoData) {
            $httpBackend.expectGET('/data/1');
            $httpBackend.when('GET', '/data/1').respond({});
            infoData.getGreeting(1);
            $httpBackend.flush();
        })
    );

    describe('getGreeting', function () {

        it('should return the correct data when getGreeting is called',
            inject(function (infoData) {
                $httpBackend.when('GET', '/data/1').respond({id: 1, infoContent: 'Hello'});
                var greeting = infoData.getGreeting(1);
                $httpBackend.flush();

                expect(greeting.id).toBe(1);
                expect(greeting.infoContent).toBe('Hello');
            }))
    });

    describe('saveGreeting', function () {

        it('should be saved with id 999 when saveGreeting is called',
            inject(function (infoData) {
                $httpBackend.when('POST', '/data/999').respond({});
                var greeting = {id: 1};
                infoData.saveGreeting(greeting);
                $httpBackend.flush();

                expect(greeting.id).toBe(999);
            })
        )
    });

    describe('getAllGreeting', function () {

        it('should be performed GET request /data when getAllGreeting is called ',
            inject(function (infoData) {
                $httpBackend.when('GET', '/data').respond([{id: 4, infoContent: 'Hi'}]);
                var allGreetings = infoData.getAllGreeting();
                $httpBackend.flush();

                expect(allGreetings[0].id).toBe(4);
                expect(allGreetings[0].infoContent).toBe('Hi');
            })
        )
    });
});