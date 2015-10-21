"use strict";

let React =         require('react'),
    SkyStoreItem =  require('./SkyStoreItem.jsx');

class SkyStore extends React.Component {
    render() {

        let rentals = [],
            buyAndKeep = [];

        this.props.skyStore.rentals.forEach(function(item) {
            rentals.push(<SkyStoreItem item={item} service="Rental" key={item.title} />);
        });

        this.props.skyStore.buyAndKeep.forEach(function(item) {
            buyAndKeep.push(<SkyStoreItem item={item} service="Buy and keep" key={item.title} />);
        });

        return (
            <div className="SkyStore BillTable">
                <h2>Sky Store</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Title</th>
                            <th>Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rentals}
                        {buyAndKeep}
                    </tbody>
                    <tfoot className="Subtotal">
                        <tr>
                            <td colSpan="2">TOTAL</td>
                            <td>£{this.props.skyStore.total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    }
}

module.exports = SkyStore;