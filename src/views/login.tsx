import { useState } from "react";
import { auth } from "../utils/base";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e: any) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };

  return (
    <div className='h-full flex'>
        <div className='w-full max-w-md m-auto bg-white rounded-lg border py-10 px-16'>
            <h1 className='text-2xl font-medium mt-4 mb-12 text-center'>
                Log in to your account 🔐
            </h1>
        <form className="mt-3 pt-3 pb-3">
          {"" !== notice && (
            <div className="text-red-500" role="alert">
              {notice}
            </div>
          )}
          <div className="mb-3">
            <input
              className="w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              type="email"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="mb-3">
            <input
              className="w-full p-2  border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div >
            <button
              type="submit"
              className=" bg-green-500 py-2 px-4 text-sm text-white rounded border focus:outline-none"
              onClick={(e) => loginWithUsernameAndPassword(e)}
            >
              Submit
            </button>
          </div>
          <div className="mt-10 text-center">
            <span>
              Need to sign up for an account?{" "}
              <Link className="text-blue-500 " to="/signup">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
