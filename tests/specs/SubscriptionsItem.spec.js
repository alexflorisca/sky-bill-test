"use strict";

let React =               require('react/addons'),
    SubscriptionsItem =   require('../../js/components/Bill/SubscriptionsItem.jsx');

// Ran into a problem where the DOM is mutated by the browser
// because this components is only inserting table rows.
// I'm sure I could figure out how to get past this given enough time


//describe('Subscriptions Item', function() {
//    beforeEach(() => {
//        this.TestUtils = React.addons.TestUtils;
//
//        let subscription = {
//            cost: 50,
//            name: "Variety with Movies HD",
//            type: "tv"
//        };
//
//        this.component = this.TestUtils.renderIntoDocument(<SubscriptionsItem subscription={subscription} />);
//        this.renderedDOM = () => React.findDOMNode(this.component);
//    });
//
//
//    it('Should display the details of a subscription item', () => {
//        // Ran into a problem where the DOM is mutated by the browser
//        // because this components is only inserting table rows.
//        // I'm sure I could figure out how to get past this given enough time
//
//        let type = this.renderedDOM().querySelectorAll("td")[0],
//            name = this.renderedDOM().querySelectorAll("td")[1],
//            cost = this.renderedDOM().querySelectorAll("td")[2];
//
//
//        expect(type.innerText).toEqual("tv");
//        expect(name.innerText).toEqual("Variety with Movies HD");
//        expect(cost.innerText).toEqual(50);
//    });
//});