import React from 'react';
import andres from "images/images/Andres Lopez.png";
import yo from "images/images/yo.png";

export default function Opiniones() {
    return (
        <div>
            <section class="reviews" id="reviews">

                <h1 class="heading text-center"> <span>CALIFICACIONES Y OPINIONES</span> </h1>

                <div class="swiper reviews-slider">

                    <div class="swiper-wrapper">

                        <div class="swiper-slide box">
                            <img src={andres} alt="" />
                            <h3>Carlos López</h3>
                            <p>Muy bonitas las artesanías y todo, pero en realidad lo que estoy buscando es a alguien que me
                                quiera de verdad.: (</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src={yo} alt="" />
                           <h3>Luis Moreno</h3>
                            <p>Gran trabajo de las comunidades, muy buena gestión, debemos seguir apoyándolos
                                y difundiendo su trabajo y su cultura: ) </p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="images/mauricio Galeano.jpeg" alt="" />
                            <h3>Mauricio Galeano</h3>
                            <p>Muy bonitas las artesanías y todo, pero en realidad lo que estoy buscando es a alguien que me
                                quiera de verdad.: (</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                        <div class="swiper-slide box">
                            <img src="images/Socrates.png" alt="" />
                            <h3>Sócrates Muñoz</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Expedita laborum voluptates voluptate fugiat est aperiam commodi nulla</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                            <img src="images/vladimir.jpeg" alt="" />
                            <h3>Vladimir Imbachi</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Aspernatur nihil ipsa placeat.Aperiam
                                at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}
