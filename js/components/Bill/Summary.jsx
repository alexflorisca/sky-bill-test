"use strict";

let React = require('react');

class Summary extends React.Component {
    render() {
        return (
            <div className="Summary">
                <h1>Your sky bill for {this.props.period.from} to {this.props.period.to}</h1>
                <h2>A total of {this.props.total} is due on {this.props.due}</h2>
            </div>
        );
    }
}

module.exports = Summary;