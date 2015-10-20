"use strict";

let React = require('react');

class SkyStoreItem extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.service}</td>
                <td>{this.props.item.title}</td>
                <td>{this.props.item.cost}</td>
            </tr>
        );
    }
}


module.exports = SkyStoreItem;