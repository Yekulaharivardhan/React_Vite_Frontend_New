import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import ModalComponent from '../ReusableComponents/ModalComponent';
import ModalPopup from '../ReusableComponents/ModalPopup';
 
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

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

   

  return (
    <div>
      <nav className="z-2 navbar navbar-expand-lg bg-body-tertiary bg-dark fixed-top">
        <div className="container-fluid px-5">
        <div>
      <NavLink className="navbar-brand text-primary" href="" onClick={(e)=>(e.preventDefault(), navigate("/"))}><i class="fa-solid fa-house"></i></NavLink>
  </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="" onClick={(e) => handleLogin(e)}>Login</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" onClick={handleAction}>Action</a></li>
                  <li><a className="dropdown-item" href="" onClick={(e) =>(e.preventDefault(), navigate("/information"))}>Explore</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" onClick={handleShow}>Content Disc</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="" onClick={handleRegisterModal}>Register</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success opacity-75" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      <ModalPopup  show={show} onHide={() => setShow(false)}/>
      <ModalComponent show={modalShow}
        onHide={() => setModalShow(false)}
          title="Register"
          modalbody=""
        />
    </div>
  );
};

export default Navbar;