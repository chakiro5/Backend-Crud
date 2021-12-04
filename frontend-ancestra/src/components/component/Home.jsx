import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from "images/images/art-1.png";
import imagen2 from "images/images/art-2.png";
import imagen3 from "images/images/art-3.png";
import imagen4 from "images/images/art-4.png";
import imagen5 from "images/images/art-5.png";
import imagen6 from "images/images/art-6.png";
import repisa1 from "images/images/repisa-1.png";


export default function Home() {
    return (
        <div>
            <section class="home" id="home">

                <div class="row">

                    <div class="content text-center">
                        <h3>Descuento del 25% <br /> en éstos productos.</h3>
                        <p>Nunca sabes lo que quieres hasta que lo ves
                            en oferta. <br /> <i>Promoción válida hasta el 15 de octubre del 2021 <br /> o hasta acabar CICLO 3</i>
                        </p>
                        <Link To="#" class="btn btn-center">Comprar Ahora</Link>
                    </div>

                    <div class="swiper promociones-slider text-center">
                        <div class="swiper-wrapper">
                            <Link To="#" class="swiper-slide"><img src={imagen1} alt="1" /></Link>
                            <Link To="#" class="swiper-slide"><img src={imagen2} alt="2" /></Link>
                            <Link To="#" class="swiper-slide"><img src={imagen3} alt="3" /></Link>
                            <Link To="#" class="swiper-slide"><img src={imagen4} alt="4" /></Link>
                            <Link To="#" class="swiper-slide"><img src={imagen5} alt="5" /></Link>
                            <Link To="#" class="swiper-slide"><img src={imagen6} alt="6" /></Link>
                        </div>
                        <img src={repisa1} class="stand" alt="7" />
                    </div>

                </div>
            </section>
        </div>
    )
}
