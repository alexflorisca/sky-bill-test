"use strict";

let React = require('react');

class Footer extends React.Component {
    render() {
        return (
            <footer className="BillFooter">
                <small>This bill was generated on the {this.props.generated}</small>
            </footer>
        );
    }
}

module.exports = Footer;