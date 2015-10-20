let React =     require('react/addons'),
    AppError =  require('../../js/components/Error/AppError.jsx');


describe('Errors', function() {
    beforeEach(() => {
        let {TestUtils} = React.addons;

        this.TestUtils = TestUtils;

        this.component = TestUtils.renderIntoDocument(<AppError error="Error" />);
        this.renderedDOM = () => React.findDOMNode(this.component);
    });


    it('The app should display an error if the data is not available', () => {
        let errorMessage = this.renderedDOM().querySelector("p"),
            errorMessageContainer = this.TestUtils.findRenderedDOMComponentWithTag(this.component, "div");


        expect(errorMessageContainer).not.toBeNull();
        expect(errorMessage.innerText).toEqual("There was a problem loading your bill. Please try again");
    });
});