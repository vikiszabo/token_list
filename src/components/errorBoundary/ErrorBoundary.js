import React, { Component } from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, info: null };
    }

    componentDidCatch(error, info) {
        //Display fallback UI
        this.setState( {hasError: true, error: error, info: info});
    }

    render() {
        if (this.state.hasError) {
            //You can render any custom fallback UI
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.info.componentStack}
                    </details>
                </div>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;