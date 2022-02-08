//Librairies
import './App.css';
import {Routes, Route } from "react-router-dom";

//Components
import Layout from './HOC/Layout';
import Home from './Containers/Home/Home';
import NotFound from './Containers/NotFound/NotFound';
import APropos from './Containers/APropos/APropos';



function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<APropos />}></Route>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


