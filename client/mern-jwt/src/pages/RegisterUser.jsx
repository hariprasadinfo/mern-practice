import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function RegisterUser() {

  const navigate = useNavigate();

  const initialFormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState(initialFormState);
  const [isUserAdded, setIsUserAdded] = useState();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/registerUser", formData)
      .then((res) => {
        console.log(res.data);
        setIsUserAdded(res.data);
        navigate('/login')
        setTimeout(() => {
          setIsUserAdded("");
        }, 5000);
      })
      .catch((err) => {
        alert(err);
      });
    setFormData(initialFormState);
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmitForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter User Name..."
                  className="input input-bordered"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="input input-bordered"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  value={formData.password}
                  className="input input-bordered"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-outline">
                  Register
                </button>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Already have an account?{" "}
                  <NavLink to="/login">login here </NavLink>
                </a>
              </label>
            </form>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
      {isUserAdded && (
        <div className="toast toast-end">
          <div className="alert alert-info">
            <span>New mail arrived.</span>
          </div>
          <div className="alert alert-success">
            <span>{isUserAdded.user}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterUser;
