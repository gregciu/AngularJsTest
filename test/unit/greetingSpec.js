'use strict';

describe('greeting', function () {

    var mockInfoData;
    beforeEach(module("greetingApp"));

    beforeEach(function () {

        mockInfoData = sinon.stub({getGreeting: function (numberId) {
            switch(numberId){
                case 1:
                    return 'Hello';
                case 2:
                    return 'Bonjour';
                default:
                    return 'No data found';
            }
        }});
        module(function ($provide) {
            $provide.value('infoData', mockInfoData);
        });
    });
    
    it('should returns correct contentInfo from infoData for corespondent values',
        inject(function (greetingFilter) {
            expect(greetingFilter(3)).toBe('No data found');
        })
    )
});