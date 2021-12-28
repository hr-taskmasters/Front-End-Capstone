import React from 'react';

function Navbar() {

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">Logo</a>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" />
            </div>
            <button type="submit" className="btn btn-light">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;