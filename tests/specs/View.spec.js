let View = require('../../js/modules/View.js');


describe('View', function() {
    beforeEach(function() {
       loadFixtures('View.fixture.html');
    });


    it('Should print a message in console', function() {
        let view = new View({});

        spyOn(window.console, 'log');
        view.render();
        expect(window.console.log).toHaveBeenCalled();
    });
});