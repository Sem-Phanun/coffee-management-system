import './Navbar.scss'
const Navbar = () => {
  return (
    <>
      <nav className="navbar-container">
        <article className="header-title">
          <h1 className='title'>Welcome to Bright Coffee.</h1>
          <p className='sub-title'>Choose the category</p>
        </article>

        <div className="search-container">
          <input type="text" placeholder='search for coffee' />
        </div>
      </nav>
    </>
  )
}

export default Navbar