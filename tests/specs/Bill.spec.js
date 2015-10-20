"use strict";

let React =         require('react/addons'),
    Bill =          require('../../js/components/Bill/Bill.jsx');


describe('Bill', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        let data = require('../bill.json');

        this.component = this.TestUtils.renderIntoDocument(<Bill bill={data} />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });

    it("Should render the summary", () => {
        let Summary = this.renderedDOM().querySelector(".Summary");
        expect(Summary).not.toBeNull();
    });

    it("Should render subscriptions", () => {
        let Summary = this.renderedDOM().querySelector(".Subscriptions");
        expect(Summary).not.toBeNull();
    });

    it("Should render the call charges", () => {
        let Summary = this.renderedDOM().querySelector(".CallCharges");
        expect(Summary).not.toBeNull();
    });

    it("Should render the Sky store items", () => {
        let Summary = this.renderedDOM().querySelector(".SkyStore");
        expect(Summary).not.toBeNull();
    });

    it("Should render the total", () => {
        let Summary = this.renderedDOM().querySelector(".Total");
        expect(Summary).not.toBeNull();
    });

    it("Should render the footer", () => {
        let Summary = this.renderedDOM().querySelector("footer");
        expect(Summary).not.toBeNull();
    });
});