import React, { useState } from 'react';
import Button from './Button';
import imgCart from '../assets/img/shop-cart.png';
import { Link } from 'react-router-dom';

function Navbar({ products }) {
  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(event) {
    const query = event.target.value;
    const results = performSearch(query);
    setSearchResults(results);
  }

  function performSearch(query) {
    return products.filter(product => {
      return (
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  return (
    <div className="container">
      <header className="Header" aria-label="Navbar">
        <div className="d-flex flex-column">
          <nav className="container-fluid pt-3 pb-3 ps-5 pe-5">
            <div className="navbar navbar-expand-lg navbar-light bg-light d-flex flex-row">
              <div className="flex-grow-1">
                <Link to="/">
                  <a className="navbar-brand text-primary fw-bold">
                    Kelontong
                  </a>
                </Link>
              </div>
              <div className="flex-grow-1">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      id="search"
                      aria-label="Search"
                      placeholder="Search..."
                      onInput={handleSearch}
                    />
                    {searchResults.length > 0 && (
                      <button
                        className="btn btn-outline-secondary mt-2"
                        onClick={() => setSearchResults([])}
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-grow-1">
                <Link to="/cart">
                  <img className="icon__checkout" id="cart" src={imgCart} alt="Cart" />
                </Link>
              </div>
              <div className="flex-grow-1">
                <Button />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="row justify-content-center mt-3">
        {searchResults.map(product => (
          <Link key={product._id} to={`/details/${product._id}`} className="list-group-item col-lg-3 col-md-4 col-sm-6 m-2">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Category: {product.category}</p>
              <p className="card-text">Price: {product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default Navbar;
