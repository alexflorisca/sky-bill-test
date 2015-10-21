"use strict";

let React =     require('react/addons'),
    Summary =   require('../../js/components/Bill/Summary.jsx');

describe('Summary', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        let period = {
            from: "2015-01-26",
            to: "2015-02-25"
        };
        let total = "136.03";
        let due = "2015-01-25";

        this.component = this.TestUtils.renderIntoDocument(<Summary period={period} total={total} due={due} />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it('Should display a summary of the bill', () => {
        let summaryLine1 = this.renderedDOM().querySelector("h1"),
            summaryLine2 = this.renderedDOM().querySelector("h2");


        expect(summaryLine1.innerText).toEqual("Your sky bill for 26 January 2015 to 25 February 2015");
        expect(summaryLine2.innerText).toEqual("A total of £136.03 is due on 25 January 2015");
    });


    it("Should render a containing element with the appropriate class", () => {
        let summaryContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");
        expect(summaryContainer).toHaveClass('Summary');
    });
});