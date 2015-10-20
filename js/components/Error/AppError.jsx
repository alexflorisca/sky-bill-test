"use strict";

let React = require('react');

class AppError extends React.Component {
    render() {
        return (
            <div className="AppError">
                <p>There was a problem loading your bill. Please try again</p>
            </div>
        );
    }
}

module.exports = AppError;