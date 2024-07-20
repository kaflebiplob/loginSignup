import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();
  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    axios
      .post("http://localhost:3001/login", { name, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
    if (!name || !password) {
      setError("Please enter the username and password");
      return;
    }
  }
  function onShowPassword() {
    setShowPassword(!showPassword);
  }

  function onCancel() {
    setName("");
    setPassword("");
    setError("");
  }
  return (
    <>
      <form action="" onSubmit={onSubmit}>
        <div className="BackendLogin">
          <h1>Login</h1>
          <h3>Enter your login credentials</h3>

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

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <div className="container">
            <button type="submit" className="cancelbtn" onClick={onCancel}>
              Cancel
            </button>
            {/* <span className="psw">
              Forgot <a href="#">password?</a>
            </span> */}
            <span className="psw">
              <a href="#">
                <Link to={"/"}> Didn't have account? </Link>
              </a>
            </span>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
