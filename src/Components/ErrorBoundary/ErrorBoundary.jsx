import { Component } from 'react'
import SomethingWentWrongPage from '../SomethingWentWrongPage/SomethingWentWrongPage';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError() {
        return { hasError: true };
      }

      componentDidCatch(error, errorInfo) {
        console.error("Error caught in ErrorBoundaryClass:", error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          return <SomethingWentWrongPage/>
        }
    
        return this.props.children;
    }
}

export default ErrorBoundary