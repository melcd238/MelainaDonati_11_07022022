//Librairies
import './App.css';

//Components
import Layout from './HOC/Layout';
import Home from './Containers/Home/Home'

function App() {
  return (
    <div className="App">
      <Layout>
        <Home/>
      </Layout>
    </div>
  );
}

export default App;
