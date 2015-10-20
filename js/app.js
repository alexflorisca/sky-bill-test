"use strict";

let React =     require('react'),
    ReactDOM =  require('react-dom'),
    Ajax =      require('./modules/ajax'),
    Bill =      require('./components/Bill/Bill.jsx'),
    AppError =  require('./components/Error/AppError.jsx');

class App {
    static start(options) {
        Ajax.get({
            url: options.url,

            success: function(data) {
                this._renderBill(data);
            }.bind(this),

            error: function(error) {
                this._renderError(error);
            }.bind(this)
        });
    }

    static _renderError(error) {
        ReactDOM.render(
            <AppError error={error} />,
            document.getElementById('app-error')
        )
    }

    static _renderBill(data) {
        ReactDOM.render(
            <Bill bill={data} />,
            document.getElementById('bill')
        )
    }
}

module.exports = App;

App.start({
    url: 'https://still-scrubland-9880.herokuapp.com/bill.json'
});
