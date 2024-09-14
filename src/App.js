import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
      <Home/>
      </ErrorBoundary>
    </div>
  );
}

export default App;
