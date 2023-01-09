import { CardCarousel } from "../../components/cardCarousel/cardCarousel.component"
import { Carousel } from "../../components/carousel/carousel.component"
import Navbar from "../../components/navbar/navbar.component"

import { data } from "../../database/database"

import "./home.style.css"

export const Home = () => {
  const CARDS = data.length;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-home">
        <h1>Bienvenido</h1>
        <div className="pasos">
          <h3>Paso 1: Contáctame por whatsapp: 959140039</h3>
          <h3>Paso 2: Envíame el nombre del set que deseas</h3>
          <h3>Paso 3: Cualquier set se separa con el 20%</h3>
          <h3>Paso 4: Envíame una captura con tu yape o plin y tu id de dota</h3>
          <h3>Paso 5: Yo te avisaré cuando hayan pasado 30 días y listo</h3>
        </div>
      </div>
    </div>
  )
}