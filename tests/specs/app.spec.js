"use strict";

let App =   require('../../js/app.js'),
    Ajax =  require('../../js/modules/ajax');


describe("App", () => {

    beforeEach(() => {
       loadFixtures('app.html');

        jasmine.Ajax.install();

        App.start({
            url: 'https://still-scrubland-9880.herokuapp.com/bill.json'
        });
    });


    it("Should make an AJAX call to the provided url", () => {
        expect(jasmine.Ajax.requests.mostRecent().url).toEqual('https://still-scrubland-9880.herokuapp.com/bill.json');
    });


    it("Should render the app on a successful response", () => {
        let success = {
                status: 200,
                responseText: require('../bill.json')
            };

        let request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(success);
        expect(document.querySelector(".Bill")).not.toBeNull();
    });


    it("Should render an error message on error response", () => {
        let error = {
                status: 404,
                responseText: "Not found"
            };

        let request = jasmine.Ajax.requests.mostRecent();
        request.respondWith(error);
        expect(document.querySelector(".AppError")).not.toBeNull();
    });

    afterEach(() => {
        jasmine.Ajax.uninstall();
    })


});


