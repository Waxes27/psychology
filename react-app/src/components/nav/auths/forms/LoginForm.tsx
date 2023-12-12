import React, { ChangeEvent, FormEvent, useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform actions with form data, such as sending to a server
    console.log("Form data submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-50 m-auto p-10">
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Username</label>
        <input
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter username"
        />
        {/* <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small> */}
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
