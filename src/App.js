//Librairies
import './App.css';
import {Routes, Route } from "react-router-dom";

//Components
import Layout from './Layout/Layout';
import Home from './Containers/Home/Home';
import NotFound from './Containers/NotFound/NotFound';
import APropos from './Containers/APropos/APropos';
import Detail from './Containers/Details/Detail';



function App() {
  return (
    <div className="containerApp">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<APropos />}></Route>
          <Route path="/location/:id" element={<Detail />}></Route>
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


