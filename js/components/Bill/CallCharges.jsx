"use strict";

let React =             require('react'),
    CallChargesItem =   require('./CallChargesItem.jsx');

class CallCharges extends React.Component {
    render() {

        let calls = [];

        this.props.callCharges.calls.forEach(function(item, index) {
             calls.push(<CallChargesItem charge={item} key={item.called + "-" + index} />);
        });

        return (
            <div className="CallCharges BillTable">
                <h2>Call Charges</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Called</th>
                            <th>Duration</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calls}
                    </tbody>
                    <tfoot className="Subtotal">
                        <tr>
                            <td colSpan="2">TOTAL</td>
                            <td>£{this.props.callCharges.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

module.exports = CallCharges;