import Navbar from "../../components/navbar/navbar.component"

import { data } from "../../database/database"

export const NotFound = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container-home">
        <h1>Bienvenido</h1>
        <div className="pasos">
          <h3>Estamos implementando esta página, pronto disponible</h3>
        </div>
      </div>
    </div>
  )
}