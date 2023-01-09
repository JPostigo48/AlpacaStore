import "./navbar.style.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <h2>Alpaca Store</h2>
      </a>
      <div className="navbar-left">
        <a href="/coleccionista-I2022">
          <h3>Coleccionista I - 2022</h3>
        </a>
        <a href="/coleccionista-II2022">
          <h3>Coleccionista II - 2022</h3>
        </a>
      </div>
    </div>
  )
}

export default Navbar;