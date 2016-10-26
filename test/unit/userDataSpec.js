'use strict';

describe('userData', function () {
    var mockUserResource;

    beforeEach(module('greetingApp'));

    beforeEach(function () {
        mockUserResource = sinon.stub({
            get: function () {
            },
            save: function () {
            }
        });
        //This is required to point for userData service that if is called
        // userResource then should be replaced by mockUserResource
        module(function ($provide) {
            $provide.value('userResource', mockUserResource);
        });
    });

    describe('getUser', function () {
        it('should call getresource.get with the username', inject(function (userData) { //injection service
            userData.getUser('bob');

            expect(mockUserResource.get.args[0][0]).toEqual({userName: 'bob'});
        }));

        it('should returns all which userResource.get returns', inject(function (userData) {
            mockUserResource.get.returns('sth data');

            expect(userData.getUser('John')).toEqual('sth data');

        }));


    });

    describe('save', function () {
        it('should userResource.save called with the same data as userData.save', inject(function (userData) {
            userData.save('test');

            expect(mockUserResource.save.calledWith('test')).toBe(true);

        }));
    })
});