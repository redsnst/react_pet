import React, { useState } from "react";
import { auth } from "./../base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const signupWithUsernameAndPassword = async (e: any) => {
    e.preventDefault();

      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/");
      } catch {
        setNotice("Sorry, something went wrong. Please try again.");
      }
  };

  return (
    <div className='h-full flex bg-gray-bg1'>
        <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
            <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                Register an account🔐
            </h1>
        <form className="mt-3 pt-3 pb-3">
          {"" !== notice && (
            <div className="text-red-500" role="alert">
              {notice}
            </div>
          )}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="form-floating mb-3">
            <input
            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className=" bg-green-500 py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark"
              onClick={(e) => signupWithUsernameAndPassword(e)}
            >
              Signup
            </button>
          </div>
          <div className="mt-10 text-center">
            <span>
              Go back to login? <Link className="text-blue-500 " to="/login">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
