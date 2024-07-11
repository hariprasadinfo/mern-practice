import axios from "axios";
import React, { useState } from "react";

function RegisterUser() {
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
    axios.post('http://localhost:5000/api/registerUser', formData).then(res => {
        console.log(res.data);
        setIsUserAdded(res.data);
        setTimeout(() => {
            setIsUserAdded('');
        }, 5000);
    }).catch((err) => {
        alert(err)
    });
    setFormData(initialFormState)
  };

  return (
    <>
      <div>
        <h2 className="p-9 font-bold tracking-wider text-3xl text-cyan-500 flex justify-center">
          Registration
        </h2>
      </div>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-9 grid">
            <input
              type="text"
              placeholder="Enter User Name..."
              className="input input-lg input-bordered mb-9"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            {/* </div>
        <div className="mb-9"> */}
            <input
              type="email"
              placeholder="Enter email"
              className="input input-lg input-bordered mb-9"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {/* </div>
        <div className="mb-9"> */}
            <input
            type="password"
              className="textarea textarea-bordered mb-9"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {/* </div>
        <div className="mb-9"> */}
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-lg input-bordered mb-9"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <button type="submit" className="btn btn-outline">
              Register
            </button>
          </div>
        </form>
      </div>
      { isUserAdded &&
        <div className="toast toast-end">
        <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div>
        <div className="alert alert-success">
          <span>{ isUserAdded.user }</span>
        </div>
      </div>
      }
    </>
  );
}

export default RegisterUser;
