"use strict";

let React =                 require('react'),
    SubscriptionsItem =     require('./SubscriptionsItem.jsx');

class Subscriptions extends React.Component {
    render() {

        let subscriptions = [];
        this.props.package.subscriptions.forEach(function(subscription) {
            subscriptions.push(<SubscriptionsItem subscription={subscription} key={subscription.type} />);
        });

        return (
            <div className="Subscriptions BillTable">
                <h2>Subscriptions</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subscriptions}
                    </tbody>
                    <tfoot className="Subtotal">
                        <tr>
                            <td colSpan="2">TOTAL</td>
                            <td>£{this.props.package.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}


module.exports = Subscriptions;