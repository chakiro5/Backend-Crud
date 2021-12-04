import React from 'react'
import Banner from 'components/component/Banner';
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Router } from 'react-router';
// import Header from "./component/Header";
// import Nav from "./component/Nav";
import Home from 'components/component/Home';
import Bannerbeneficios from 'components/component/Bannerbeneficios';
import Features from 'components/component/Features';
import BannerContacto from 'components/component/BannerContacto';
import ProductosRecientes from 'components/component/ProductosRecientes';
import Opiniones from 'components/component/Opiniones';
import Nosotros from 'components/component/Nosotros';
import Footer from 'components/component/Footer';


export default function Inicio() {
    return (
        <div className="inicio">
            {/* <Header /> */}
            <Home />
            <Bannerbeneficios />
            <Features />
            <BannerContacto />
            <ProductosRecientes />
            <Banner />
            <Opiniones />
            <Nosotros />
            <Footer />
        </div>
    )
}
