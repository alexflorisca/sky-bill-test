"use strict";

let React =     require('react/addons'),
    Footer =    require('../../js/components/Bill/Footer.jsx');

describe('Footer', function() {
    beforeEach(() => {
        this.TestUtils = React.addons.TestUtils;
        this.component = this.TestUtils.renderIntoDocument(<Footer generated="2015-01-11" />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it('Should display the date the bill was generated', () => {
        let footer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "footer"),
            footerText = footer.querySelector("small");


        expect(footer).not.toBeNull();
        expect(footerText.innerText).toEqual("This bill was generated on the 2015-01-11");
    });
});
