
import './App.css';
import Layout from './components/Layout/Layout';
import LandingPage from './containers/LandingPage/LandingPage';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Layout>
      <LandingPage />
      </Layout>
    </div></BrowserRouter>
    
  );
}

export default App;
