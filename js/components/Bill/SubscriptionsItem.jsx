"use strict";

let React = require('react');

class SubscriptionsItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.subscription.type}</td>
                <td>{this.props.subscription.name}</td>
                <td>{this.props.subscription.cost}</td>
            </tr>
        )
    }
}

module.exports = SubscriptionsItem;