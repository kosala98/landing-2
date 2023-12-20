const NavBar = () => {
  return (
    <div className="container-fluid nav-container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4m">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <h2 className="text-white px-5">AIRB.</h2>
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-2">
          <li>
            <a href="#" className="nav-link px-2 text-white fw-normal fs-5">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white fw-normal fs-5">
              Art Work
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 text-white fw-normal fs-5">
              About Me
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end"></div>
      </header>
    </div>
  );
};

export default NavBar;
