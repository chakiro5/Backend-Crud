import React from 'react';
import imgfooter from "images/images/logo-3.svg";

export default function Footer() {
  return (
    <div>
      <section class="footer">

        <div class="box-container">
          <div class="box">
            <h3>ENLACES</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> Inicio </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Destacados </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Recientes </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Reseñas </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Nosotros </a>
          </div>

          <div class="box">
            <h3>EXTRAS</h3>
            <a href="#"> <i class="fas fa-arrow-right"></i> Mi cuenta </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Mi carrito </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Mis favoritos </a>
            <a href="#"> <i class="fas fa-arrow-right"></i> Contáctanos </a>
          </div>

          <div class="box">
            <h3>SOPORTE</h3>
            <a href="#"> <i class="fas fa-phone"></i> (+57) 310 406 7006 </a>
            <a href="#"> <i class="fas fa-phone"></i> (+57) 300 445 9700 </a>
            <a href="#"> <i class="fas fa-envelope"></i> ancestra@ancestra.com </a>
          </div>

          <div class="box">
            <img src={imgfooter} class="imagotipo" alt="" />
            <a href="#"> <i class="fas fa-map-marker-alt text-center"></i> Colombia </a>
          </div>
        </div>

        <div class="credit">
          <div class="share">
            <a href="#" class="fab fa-facebook-f"></a>
            <a href="#" class="fab fa-twitter"></a>
            <a href="#" class="fab fa-instagram"></a>
            <a href="#" class="fab fa-linkedin"></a>
            <a href="#" class="fab fa-pinterest"></a>
          </div><br />
          <p>Copyright 2021 <span>Ancestra</span> | Todos los derechos reservados.</p>
        </div>

      </section>
    </div>
  )
}
