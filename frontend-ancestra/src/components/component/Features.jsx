import React from 'react';
import { Link } from 'react-router-dom';
import imagen1 from "images/images/art-1.png";
import imagen10 from "images/images/art-10.png";
import { Card, CardGroup } from 'react-bootstrap';


export default function Features() {
    return (
        <div>
            <section class="featured" id="featured">

                <h1 class="heading text-center"> <span>PRODUCTOS DESTACADOS</span> </h1>

                <div class="swiper featured-slider">

                    <div class="swiper-wrapper">

                        {/* <div class="swiper-slide box">
                            <div class="icons">
                                <Link To="#" class="fas fa-search"></Link>
                                <Link To="#" class="fas fa-heart"></Link>
                                <Link To="#" class="fas fa-eye"></Link>
                            </div>
                            <div class="image">
                                <img src={imagen1} alt="11" />
                            </div>
                            <div class="content">
                                <h3>Bolso de Fique</h3>
                                <div class="price">$59.000 <span>$79.000</span></div>
                                <Link To="#" class="btn">Añadir al carrito</Link>
                            </div>
                        </div> */}
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    Column Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto consequatur qui quisquam ipsa vero, dolor sapiente nihil ullam tempore magnam accusamus neque eaque dicta ea harum assumenda? Dolorem, totam?

                                </div>
                                <div class="col">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto cum nihil, hic alias animi, voluptates sed ab adipisci consectetur unde excepturi accusamus assumenda libero eius fugiat maiores deleniti eveniet. Column
                                </div>
                                <div class="col">
                                    Column
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>

                </div>

            </section>
            <div class="container">
                <div class="row">
                    <div class="col">
                        Column Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iusto consequatur qui quisquam ipsa vero, dolor sapiente nihil ullam tempore magnam accusamus neque eaque dicta ea harum assumenda? Dolorem, totam?

                    </div>
                    <div class="col">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut architecto cum nihil, hic alias animi, voluptates sed ab adipisci consectetur unde excepturi accusamus assumenda libero eius fugiat maiores deleniti eveniet. Column
                    </div>
                    <div class="col">
                        Column
                    </div>
                </div>
            </div>
        </div>
    )
}
