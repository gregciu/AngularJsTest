'use strict';

describe('greetings app', function () {

    describe('greeting page', function () {
        beforeEach(function () {
            browser.get('http://localhost:9996/index.html');
        });

        it('should exits one data model message.info and text of label equal to data model', function () {
            var putGreeting = element.all(by.model('message.info'));
            putGreeting.clear();
            putGreeting.sendKeys('Hello');
            // console.log('element css: ', element(by.css('[style="color: red"]')).getText());
            expect(putGreeting.count()).toEqual(1);
            expect(element(by.css('[style="color: red"]')).getText()).toEqual('Hello');
        });

        it('should after filling out greeting and press button "Submit greeting" on the next page should appear link' +
            ' with the same given word', function () {
            var putGreeting = element.all(by.model('message.info'));
            putGreeting.clear();
            putGreeting.sendKeys('Hello');
            element(by.buttonText('Submit greeting')).click().then(function () {
                var link = element(by.binding('submittedGreeting'));
                expect(link.getText()).toEqual('Hello');
            });


        });
    });
});