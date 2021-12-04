import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
// import Nike from "images/Nike.jpg";
import logo from 'images/images/logo-1.svg';


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;


  const toogleMenu = () =>{
    setMenu(!menu)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
        <img src={logo} alt="Ancestra" width="150" />
      </div>
      </Link>
      <ul>
        <li>
          <Link to="/" className="navcolor">INICIO</Link>
        </li>
        <li>
          <Link to="/productos" className="navcolor">PRODUCTOS</Link>
        </li>
      </ul>
      <div className="cart" onClick={toogleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total"> {carrito.length} </span>
      </div>
    </header>
  );
};
