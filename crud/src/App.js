import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ListaProductos from "./components/ListaProductos";
import AgregarProductos from "./components/AgregarProducto";
import Productos from "./components/Producto";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/productos" className="navbar-brand">
          ancestra
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/productos" className="nav-link">
              Productos
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/agregar" className="nav-link">
              Agregar
            </Link>
          </li>
        </div>
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route>
          <Route exact path="/" component={<ListaProductos/>}/>
          <Route path="/agregar" component={<AgregarProductos/>}/>
          <Route path="/productos/:id" component={<Productos/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
   );
}

export default App;
