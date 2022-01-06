import React from 'react';

function Navbar() {

  return (
    <nav className='navbar navbar-light bg-light p_navbar'>
      <div className='container-fluid'>
        <img className='p_logo' src={`images/logo2.png`}></img>
        <form className='d-flex'>
          <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search'></input>
          <button className='btn btn-outline-gray' type='submit'><i className='fas fa-search'></i></button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;