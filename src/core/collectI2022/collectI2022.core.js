import { CardCarousel } from "../../components/cardCarousel/cardCarousel.component"
import { Carousel } from "../../components/carousel/carousel.component"
import Navbar from "../../components/navbar/navbar.component"

import { data } from "../../database/database"

import "./collectI2022.style.css"

export const CollectI2022 = () => {
  const CARDS = data.length;
  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
      <Carousel>
        {[...new Array(CARDS)].map((p, i) => (
          <CardCarousel hero={data[i].hero} name={data[i].name} image={data[i].image} state={data[i].state} price={data[i].price}/>
        ))}
      </Carousel>
      </div>
    </div>
  )
}