import './App.css';
import Main from './Components/MainComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Main />
      </div>
    </Router>
  );
}

export default App;
