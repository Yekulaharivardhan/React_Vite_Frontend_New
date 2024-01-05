import React from 'react';
import { Link } from 'react-router-dom';
import {useForm} from "react-hook-form"

const LoginPage = () => {

const {register, handleSubmit,formState: { errors },} = useForm();

const onSubmit=(data)=>{
alert(JSON.stringify(data))
}
  
  return (
    <div className='bg-dark login_main' style={{ height: "100vh" }}>
      <div className='container'>
        <Link to='/'>
          <i className=" fs-2 pt-3 fa-solid fa-house" /></Link>
      </div>
      <main className="form-signin w-100 m-auto container-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <img className="mb-4" src="vite.svg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal text-white">Please sign in</h1>

          <div className="form-floating">
            <input {...register("email", { required: true })} type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input {...register("password", { required: true })} type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
            {errors.email && <span className=''>Please input required fields</span>}
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-white" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
          <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          {/* <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p> */}
        </form>
      </main>
    </div>
  );
};

export default LoginPage;