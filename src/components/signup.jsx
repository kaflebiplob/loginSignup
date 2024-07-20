import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [newpassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  function onSubmitHandler(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/signup", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));

    setError("");
    if (!name || !password ) {
      setError("Please enter the username and password");
      return;
    }
    
  }

  function onShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <form action="" onSubmit={onSubmitHandler}>
        <div className="BackendLogin">
          <h1>Signup</h1>
          <h3>Enter your credentials</h3>

          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              //   name="psw"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              name="psw"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              minLength={8}
              required
            />
            <input type="checkbox" name="" id="" onClick={onShowPassword} />
            <label htmlFor="showPassword">show password</label>
            {error && <div style={{ color: "red" }}>{error}</div>}

            <button type="button">Signup </button>
          </div>

          <div className="container">
            <button type="submit" className="cancelbtn">
              Cancel
            </button>
            <span className="psw">
              <a href="#">
                <Link to={"/login"}> Already have account? </Link>
              </a>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Signup;
