"use strict";

let React = require('react');

class CallChargesItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.charge.called}</td>
                <td>{this.props.charge.duration}</td>
                <td>£{this.props.charge.cost}</td>
            </tr>
        )
    }
}

module.exports = CallChargesItem;