import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModalComponent from '../ReusableComponents/ModalComponent';
import Modal from 'react-bootstrap/Modal';
const Navbar = () => {

const navigate = useNavigate()
const [modalShow, setModalShow] = React.useState(false);
  const handleLogin = (e) => {
    e.preventDefault()
    navigate("/loginpage")
  }
  const handleAction = async () => {
    const response = await axios.get("http://localhost:5001/fetch_Data")
    alert(response.data)
  }

  const handleRegisterModal=(e)=>{
    e.preventDefault()
    setModalShow(true)
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top">
        <div className="container-fluid px-5">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={(e) => handleLogin(e)}>Login</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={handleAction}>Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link text-primary" href="" onClick={handleRegisterModal}>Register</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <ModalComponent show={modalShow}
        onHide={() => setModalShow(false)}
          title="Register"
          modalbody=""
        />
    </div>
  );
};

export default Navbar;