"use strict";

let React = require('react');

class Total extends React.Component {
    render() {
        return (
            <table className="Total">
                <tbody>
                    <tr>
                        <th><h2>TOTAL for this month</h2></th>
                        <td><h2>{this.props.total}</h2></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

module.exports = Total;