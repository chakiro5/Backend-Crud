import React from 'react';
import imagen16 from "images/images/art-16.png";

export default function Banner() {
    return (
        <div>
            <section className="deal text-center">

                <div className="content">
                    <h3>Oferta del día!!</h3>
                    <h1>Descuento del 50%</h1>
                    <p>Aprovecha y enamórate de nuestras Mega Ofertas!! <br /> <i>Aplica solo para dos unidades por persona.</i>
                    </p>
                    <a href="#" className="btn">COMPRAR AHORA</a>
                </div>

                <div className="imagevitrina">
                    <img src={imagen16} alt="" />
                </div>

            </section>
        </div>
    )
}
