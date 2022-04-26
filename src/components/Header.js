import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <i className="bi bi-hypnotize m-1" style={{ fontSize: 30, color: 'white' }}></i>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Главная</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">Авторизация</Link>
        </li>
      </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/weather">Погода</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-dark m-1" type="submit">Search</button>
      </form>

    </nav>

  );
}
