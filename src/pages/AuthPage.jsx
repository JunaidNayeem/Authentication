import { useState } from "react";
import Signup from "../components/auth/signup";
import Login from "../components/auth/login";
import "../assets/sass/auth.scss";

export default function Auth() {
  const [signup, setSignup] = useState(false);

  return (
    <div className="auth-container">
      {signup ? <Signup /> : <Login setSignup={setSignup} />}
    </div>
  );
}
