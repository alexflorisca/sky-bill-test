"use strict";

let React =         require('react/addons'),
    CallCharges =   require('../../js/components/Bill/CallCharges.jsx');


describe('CallCharges', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        let callCharges ={
            calls: [
                { called: "07716393769", duration: "00:23:03", cost: 2.13 },
                { called: "07716393769", duration: "00:23:03", cost: 2.13 },
                { called: "07716393769", duration: "00:23:03", cost: 2.13 }
            ],
            total: 59.64
        };

        this.component = this.TestUtils.renderIntoDocument(<CallCharges callCharges={callCharges} />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it("Should render a containing element with the appropriate class", () => {
        let callChargesContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
        expect(callChargesContainer).toHaveClass('CallCharges');
    });


    it("Should display a list of calls", () => {
        let items = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "tbody");
        expect(items.children.length).toEqual(3);
    });

    it("Should display the right headings", () => {
        let headings = this.renderedDOM().querySelectorAll("th");

        expect(headings[0].innerText).toEqual("Called");
        expect(headings[1].innerText).toEqual("Duration");
        expect(headings[2].innerText).toEqual("Cost");
    });

    it("Should display the total", () => {
        let total =  this.renderedDOM().querySelectorAll("tfoot td")[1];
        expect(total.innerText).toEqual("£59.64");
    });
});