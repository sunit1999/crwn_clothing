import React, {Component} from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = { 
            hasError: false
         }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errInfo) {
        console.log(error,errInfo);
    }

    render() {
        if (this.state.hasError) return (
            <div>Oops! Something went wrong</div>
        )

        return this.props.children;
    }
}
 
export default ErrorBoundary;