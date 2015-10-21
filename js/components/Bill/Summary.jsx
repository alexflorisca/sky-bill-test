"use strict";

let React = require('react');

class Summary extends React.Component {

    constructor(props) {
        super(props);
        this._formatDate = this._formatDate.bind(this);
    }

    _formatDate(dateStr) {
        try {
           let monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            let date = new Date(dateStr);
            let day = date.getDate();
            let monthIndex = date.getMonth();
            let year = date.getFullYear();

            return day + " " + monthNames[monthIndex] + " " + year;
        }
        catch(e) {
            return dateStr;
        }
    }

    render() {
        return (
            <div className="Summary">
                <h1>Your sky bill for {this._formatDate(this.props.period.from)} to {this._formatDate(this.props.period.to)}</h1>
                <h2>A total of £{this.props.total} is due on {this._formatDate(this.props.due)}</h2>
            </div>
        );
    }
}

module.exports = Summary;