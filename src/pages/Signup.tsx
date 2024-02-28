import { NavLink } from "react-router-dom";
import HeroImage from "../assets/auth-login-illustration-light.png";

const Signup = () => {
  return (
    <div className="w-full h-screen flex gap-10 p-10 px-20">
      <div className="w-[60%] h-full bg-gray-100 rounded-lg flex justify-center items-center">
        <img
          src={HeroImage}
          alt="signup-hero-image"
          className="w-[20rem] h-[25rem] object-contain"
        />
      </div>
      <div className="w-[40%] h-full p-5">
        <div className="h-5 w-5 bg-indigo-500"></div>
        <h1 className="text-2xl font-semibold mt-5 text-gray-600">
          Welcome to Vuexy! 👋
        </h1>
        <p className="text-gray-500 text-sm">
          Please signup to your account and start the adventure
        </p>
        <form className="flex flex-col gap-5 mt-5 text-xs">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-600 mb-1">
              Email or Username
            </label>
            <input
              type="email"
              id="email"
              name="email"
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
              placeholder="Enter your password"
              className="border border-gray-300 rounded-md focus:border-indigo-500 p-1 px-3 outline-none"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cpassword" className="text-gray-600 mb-1">
              Confirm Password
            </label>
            <input
              type="cpassword"
              id="cpassword"
              name="cpassword"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-md focus:border-indigo-500 p-1 px-3 outline-none"
            />
          </div>

          <button className="bg-indigo-500 text-sm  text-white p-1 rounded-md">
            Sign up
          </button>
          <p className="text-center text-sm">
            Already have an account?{" "}
            <NavLink to={"/login"} className="text-indigo-500 cursor-pointer">
              Signin
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
