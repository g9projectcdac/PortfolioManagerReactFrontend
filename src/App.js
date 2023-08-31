import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import SearchResultPage from './pages/SearchResultPage';
import Footer from './layout/Footer';
import Register from './pages/RegistrationForm';
import Login from './pages/LoginForm'
import AddPortFolio from './portfolios/AddPortFolio';
import EditPortFolio from './portfolios/EditPortFolio';
import ViewPortFolio from './portfolios/ViewPortFolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/addportfolio" element={<AddPortFolio />} />
          <Route exact path="/editportfolio/:id" element={<EditPortFolio />} />
          <Route exact path="/viewportfolio/:id" element={<ViewPortFolio />} />
          <Route path="/search-results/:query" element={<SearchResultPage/>} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
