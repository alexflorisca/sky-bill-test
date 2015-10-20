"use strict";

let React =         require('react/addons'),
    Subscriptions =   require('../../js/components/Bill/Subscriptions.jsx');


describe('Subscriptions', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        let _package = {
            subscriptions: [
                { type: "tv", name: "Variety with Movies HD", cost: 50.00 },
                { type: "talk", name: "Sky Talk Anytime", cost: 5.00 },
                { type: "broadband", name: "Fibre Unlimited", cost: 16.40 }
            ],
            total: 71.40
        };

        this.component = this.TestUtils.renderIntoDocument(<Subscriptions package={_package} />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it("Should render a containing element with the appropriate class", () => {
        let subscriptionsContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
        expect(subscriptionsContainer).toHaveClass('Subscriptions');
    });


    it("Should display a list of subscriptions", () => {
        let items = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "tbody");
        expect(items.children.length).toEqual(3);
    });

    it("Should display the right headings", () => {
        let headings = this.renderedDOM().querySelectorAll("th");

        expect(headings[0].innerText).toEqual("Type");
        expect(headings[1].innerText).toEqual("Name");
        expect(headings[2].innerText).toEqual("Cost");
    });

    it("Should display the total", () => {
        let total =  this.renderedDOM().querySelectorAll("tfoot td")[1];
        expect(total.innerText).toEqual("71.4");
    });
});