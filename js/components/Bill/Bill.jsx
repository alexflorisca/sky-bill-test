"use strict";

let React =         require('react'),
    Summary =       require('./Summary.jsx'),
    CallCharges =   require('./CallCharges.jsx'),
    Subscriptions = require('./Subscriptions.jsx'),
    SkyStore =      require('./SkyStore.jsx'),
    Total =         require('./Total.jsx'),
    Footer =        require('./Footer.jsx');

class Bill extends React.Component {
    render() {
        return (
            <div className="Bill">
                <Summary
                    period={this.props.bill.statement.period}
                    due={this.props.bill.statement.due}
                    total={this.props.bill.total} />
                <Subscriptions package={this.props.bill.package} />
                <CallCharges callCharges={this.props.bill.callCharges} />
                <SkyStore skyStore={this.props.bill.skyStore} />
                <Total total={this.props.bill.total} />
                <Footer generated={this.props.bill.statement.generated} />
            </div>
        );
    }
}

module.exports = Bill;