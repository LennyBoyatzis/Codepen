"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CreditCardForm = React.createClass({
    displayName: "CreditCardForm",

    getInitialState: function getInitialState() {
        return {
            cardDetails: {
                CVC: '1234'
            },
            submitting: false,
            paymentSuccessful: false
        };
    },

    handleInput: function handleInput(type) {
        var _this = this;

        return function (e) {
            var _extends2;

            _this.setState({
                errorMsg: null,
                cardDetails: _extends({}, _this.state.cardDetails, (_extends2 = {}, _extends2["" + type] = e.target.value, _extends2))
            });
        };
    },

    handleSubmit: function handleSubmit(e) {
        var _this2 = this;

        e.preventDefault();
        setTimeout(function () {
            _this2.setState({
                submitting: false
            });
        }, 1500);

        this.setState({
            submitting: true
        });
    },

    renderButton: function renderButton() {
        var buttonContent = "";
        if (this.state.submitting) {
            buttonContent = React.createElement(
                "div",
                null,
                React.createElement("span", { className: "spinner spinner-white" }),
                React.createElement(
                    "span",
                    null,
                    "Verifying..."
                )
            );
        } else if (this.state.paymentSuccessful) {
            buttonContent = React.createElement(
                "div",
                null,
                React.createElement("span", { className: "icon-success ion-checkmark-round" })
            );
        } else {
            buttonContent = React.createElement(
                "div",
                null,
                React.createElement(
                    "span",
                    null,
                    "Pay"
                )
            );
        }
        return React.createElement(
            "button",
            { className: "btn btn-primary", onClick: this.handleSubmit },
            buttonContent
        );
    },

    render: function render() {
        console.log("this.state.carDetails", this.state.cardDetails);
        return React.createElement(
            "div",
            { className: "credit-card" },
            React.createElement(
                "div",
                { className: "card-container" },
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 left" },
                        React.createElement(
                            "label",
                            { "for": "cardNumber" },
                            "Card Number"
                        ),
                        React.createElement("input", { id: "cardNumber", placeholder: "1779 5442 1021 2061", onChange: this.handleInput("cardNumber"), value: this.state.cardDetails.cardNumber })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 right" },
                        React.createElement("img", { className: "visa-logo", src: "http://res.cloudinary.com/dsgf8vkrn/image/upload/v1452907984/visa-logo_gr178f.gif" })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row mt-4" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 left" },
                        React.createElement(
                            "label",
                            { "for": "cardHoldersName" },
                            "Card Holders Name"
                        ),
                        React.createElement("input", { id: "cardHoldersName", placeholder: "A. Johnson", onChange: this.handleInput("cardHoldersName"), value: this.state.cardDetails.cardHoldersName })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 right" },
                        React.createElement(
                            "label",
                            { "for": "validTill" },
                            "Valid Till"
                        ),
                        React.createElement("input", { id: "validTill", className: "valid-til-input", placeholder: "02/17", onChange: this.handleInput("validTill"), value: this.state.cardDetails.validTill })
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row mt-4" },
                    React.createElement(
                        "div",
                        { className: "col-md-6 left" },
                        React.createElement(
                            "label",
                            { "for": "CVC" },
                            "CVC"
                        ),
                        React.createElement("input", { type: "password", id: "CVC", value: "123", onChange: this.handleInput("CVC"), value: this.state.cardDetails.CVC })
                    ),
                    React.createElement(
                        "div",
                        { className: "col-md-6 right" },
                        this.renderButton()
                    )
                )
            )
        );
    }
});

React.render(React.createElement(CreditCardForm, null), document.querySelector('body'));