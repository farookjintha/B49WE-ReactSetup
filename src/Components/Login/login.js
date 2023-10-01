import { useState } from "react";
import "./login.css";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleCred = (data) => {
    setUserCredentials((cred) => {
      return { ...cred, ...data };
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Logging in..", userCredentials);

    setUserCredentials({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-container">
      <h2 className="title">Log In</h2>
      <form onSubmit={handleLogin}>
        <div className="row">
          <label className="label">Email: </label>
          <input
            type="email"
            value={userCredentials.email}
            onChange={(e) => handleCred({ email: e.target.value })}
          />
        </div>
        <div className="row">
          <label className="label">Password: </label>
          <input
            type="password"
            value={userCredentials.password}
            onChange={(e) => handleCred({ password: e.target.value })}
          />
        </div>
        <div>
          <button className="submit-button" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
