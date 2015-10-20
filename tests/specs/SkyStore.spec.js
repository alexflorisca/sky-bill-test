"use strict";

let React =         require('react/addons'),
    SkyStore =      require('../../js/components/Bill/SkyStore.jsx');


describe('Sky Store', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        let skyStore = {
            rentals: [
                { title: "50 Shades of Grey", cost: 4.99 }
            ],
            buyAndKeep: [
                { title: "That's what she said", cost: 9.99 },
                { title: "Brokeback mountain", cost: 9.99 }
           ],
           total: 24.97
        };

        this.component = this.TestUtils.renderIntoDocument(<SkyStore skyStore={skyStore} />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it("Should render a containing element with the appropriate class", () => {
        let SkyStoreContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
        expect(SkyStoreContainer).toHaveClass('SkyStore');
    });


    it("Should display a list rentals and Buy to keep items from the Sky store", () => {
        let items = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "tbody");
        expect(items.children.length).toEqual(3);
    });

    it("Should display the right headings", () => {
        let headings = this.renderedDOM().querySelectorAll("th");

        expect(headings[0].innerText).toEqual("Service");
        expect(headings[1].innerText).toEqual("Title");
        expect(headings[2].innerText).toEqual("Cost");
    });

    it("Should display the total", () => {
        let total =  this.renderedDOM().querySelectorAll("tfoot td")[1];
        expect(total.innerText).toEqual("24.97");
    });
});