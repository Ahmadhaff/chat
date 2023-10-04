/* eslint-disable no-import-assign */
import { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const {currentUser ,SigninWithGoogle} = UserAuth();
  
  const handleSignin = async () => {
    try {
      await SigninWithGoogle();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if(currentUser) {
      navigate("/chat")
    }
  }, [currentUser]);

  return (
    <div className="hero min-h-screen bg-base-200 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={handleSignin}  className="btn btn-success">login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
