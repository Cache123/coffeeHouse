import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super()
        this.state = {
            hasError: false,
            errorMessage: ''
        }
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;

// Only use if you know if code will/might fail!
// This is specifically designed for launching and using production