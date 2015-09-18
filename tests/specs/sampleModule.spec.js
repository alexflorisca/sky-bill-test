var sampleModule = require('../../js/modules/View');


describe('Sample Module', function() {
    beforeEach(function() {
       loadFixtures('sampleModule.fixture.html');
    });


    it('Should print a message in console', function() {
        spyOn(window.console, 'log');
        sampleModule.init();
        expect(window.console.log).toHaveBeenCalled();
    });
});