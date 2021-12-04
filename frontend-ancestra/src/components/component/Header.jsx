import React from 'react';
import { Link } from 'react-router-dom';
import logo from 'images/images/logo-1.svg';

export default function Header() {
    return (
        <div>
            <header class="header">

                <div class="header-1">
                    <Link To="#" class="logo"> <i class="image"><img src={logo} alt="" /></i></Link>

                    <form action="" class="search-form">
                        <input type="search" name="" placeholder="Buscar productos..." id="search-box" />
                        <label for="search-box" class="fas fa-search"></label>
                    </form>

                    <div class="icons">
                        <div id="search-btn" class="fas fa-search"></div>
                        <Link To="#" class="fas fa-heart"></Link>
                        <Link To="#" class="fas fa-shopping-cart"></Link>
                        <div id="login-btn" class="fas fa-user"></div>
                    </div>
                </div>

                <div class="header-2">
                    <nav class="navbar">
                        <Link To="#home">INICIO</Link>
                        <Link To="#featured">DESTACADOS</Link>
                        <Link To="#arrivals">RECIENTES</Link>
                        <Link To="#reviews">RESEÑAS</Link>
                        <Link To="#blogs">NOSOTROS</Link>
                        <Link To="./productos.html" target="_blank">PRODUCTOS</Link>
                        <Link To="./formulariologin.html">DASHBOARD</Link>
                    </nav>
                </div>

            </header>
            <nav class="bottom-navbar">
                <Link To="#home" class="fas fa-home"></Link>
                <Link To="#featured" class="fas fa-list"></Link>
                <Link To="#arrivals" class="fas fa-tags"></Link>
                <Link To="#reviews" class="fas fa-comments"></Link>
                <Link To="#blogs" class="fas fa-id-card"></Link>
            </nav>


            <div class="login-form-container">
                <div id="close-login-btn" class="fas fa-times"/>

                <form action="">
                    <h3>INICIAR SESIÓN</h3>
                    <span>Usuario:</span>
                    <input type="email" name="" class="box" placeholder="Ingrese su correo*" id="" />
                    <span>Contraseña:</span>
                    <input type="password" name="" class="box" placeholder="Ingrese su contraseña*" id=""/>
                    <div class="checkbox">
                            <input type="checkbox" name="" id="remember-me" />
                            <label for="remember-me"> Recordar contraseña.</label>
                    </div>
                    <input type="submit" value="ENVIAR" class="btn" />
                        <p>¿Olvidó su contraseña?<Link To="#"> Ingresa Aquí</Link></p>
                        <p>¿No tienes una cuenta?<Link To="registro.html"> Regístrate Aquí</Link></p>
                </form>
            </div>
        </div>
    )
}
