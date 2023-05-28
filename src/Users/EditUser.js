import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./style.css";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    author: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    author: "",
    email: "",
  });

  const { name, author, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

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

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
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
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger m-2" to="/home">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}