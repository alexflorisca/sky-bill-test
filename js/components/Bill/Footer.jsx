"use strict";

let React = require('react');

class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <small>This bill was generated on the {this.props.generated}</small>
            </footer>
        );
    }
}

module.exports = Footer;