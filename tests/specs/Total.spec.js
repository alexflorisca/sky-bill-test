let React =     require('react/addons'),
    Total =     require('../../js/components/Bill/Total.jsx');


describe('Total', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;

        this.component = this.TestUtils.renderIntoDocument(<Total total="12.95" />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it('Should display the total amount', () => {
        let total = this.renderedDOM().querySelectorAll("h2")[1],
            totalContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "table");


        expect(totalContainer).toHaveClass("Total");
        expect(total.innerText).toEqual("£12.95");
    });
});