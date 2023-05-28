import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";


export default function AddBook() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    author: "",
    email: "",
    password:"",
  });

  const [errors, setErrors] = useState({
    name: "",
    author: "",
    email: "",
    password:"",
  });

  const { name, author, email,password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = { ...errors };

    if (!name) {
      isValid = false;
      newErrors.name = "Name is required";
    }

    if (!author) {
      isValid = false;
      newErrors.author = "Author is required";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      newErrors.email = "Email is invalid";
    }

    if(!password){
      isValid = false;
      newErrors.password = "Password is invalid";
    }

    setErrors(newErrors);
    return isValid;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await axios.post("http://localhost:8080/user", user);
      navigate("/home");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Book</h2>


          <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input
                  type={"text"}
                  className={`form-control ${errors.email && "is-invalid"}`}
                  placeholder="Enter your Email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type={"password"}
                className={`form-control ${errors.password && "is-invalid"}`}
                placeholder="Enter your Password"
                name="password"
                value={password}
                onChange={(e) => onInputChange(e)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>





            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Book's Name
              </label>
              <input
                type={"text"}
                className={`form-control ${errors.name && "is-invalid"}`}
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name}</div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="Author" className="form-label">
                Author
              </label>
              <input
                type={"text"}
                className={`form-control ${errors.author && "is-invalid"}`}
                placeholder="Enter the Author"
                name="author"
                value={author}
                onChange={(e) => onInputChange(e)}
              />
              {errors.author && (
                <div className="invalid-feedback">{errors.author}</div>
              )}
            </div>

            <button type="submit" className="btn btn-outline-secondary btn-register">
              Submit
            </button>
            <Link className="btn btn-outline-danger m-2 btn-register" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

