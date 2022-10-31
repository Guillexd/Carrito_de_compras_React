import React from "react";
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
      <header className="bg-secondary bg-opacity-75 w-100">
        <nav className="navbar navbar-expand-lg w-100">
          <div className="container-fluid justify-content-between w-100">
            <div className="me-lg-5">
                <Link to={"/"}>
                  <img src={require("../../utils/images/guille.png")} alt="Guille's Market" width="150"/>
                </Link>
            </div>
            <CartWidget/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-center ms-lg-5" id="navbarNav" style={{fontSize:'1.7rem', fontWeight: 'bold'}}>
              <ul className="navbar-nav ms-5">
                <li className="nav-item ms-lg-5">
                  <Link to={'/categorias/verduras'} className="nav-link">Verduras</Link>
                </li>
                <li className="nav-item ms-lg-5">
                  <Link to={'/categorias/frutas'} className="nav-link">Frutas</Link>
                </li>
                <li className="nav-item ms-lg-5">
                  <Link to={'/categorias/bebidas'} className="nav-link">Bebidas</Link>
                </li>
              </ul> 
            </div>
          </div>
        </nav>
      </header>
    )
}

export default NavBar;