import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";

export default class ErrorBoundry extends Component {

    componentDidCatch() {
        console.log('Error!')
    }

    render() {
        if (1 === 0) {
            return (
                <ErrorIndicator/>
            )
        }
        return this.props.children;
    }
};