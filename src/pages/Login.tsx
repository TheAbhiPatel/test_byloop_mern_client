import { NavLink } from "react-router-dom";
import HeroImage from "../assets/auth-login-illustration-light.png";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("All field required.");
    } else {
      setErrorMsg("");
      console.log("--------->", password, email);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row  gap-10  p-5 md:p-10 md:px-20">
      <div className="w-[100%] md:w-[60%] h-full bg-gray-100 rounded-lg flex justify-center items-center">
        <img
          src={HeroImage}
          alt="signup-hero-image"
          className="w-[20rem] h-[25rem] object-contain"
        />
      </div>
      <div className="w-[100%] md:w-[40%] h-full p-5">
        <div className="h-5 w-5 bg-indigo-500"></div>
        <h1 className="text-2xl font-semibold mt-5 text-gray-600">
          Welcome to Vuexy! 👋
        </h1>
        <p className="text-gray-500 text-sm">
          Please signin to your account and start the adventure
        </p>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-3 mt-5 text-xs"
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-1">
              Email or Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email or Username"
              className="border border-gray-300 rounded-md focus:border-indigo-500 p-1 px-3 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md focus:border-indigo-500 p-1 px-3 outline-none"
            />
          </div>
          {errorMsg && <p className="text-xs text-red-500">* {errorMsg}</p>}
          <button className="bg-indigo-500 text-sm  text-white p-1 rounded-md">
            Sign in
          </button>
          <p className="text-center text-sm">
            New on our platform?{" "}
            <NavLink to={"/signup"} className="text-indigo-500 cursor-pointer">
              Create an account
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
