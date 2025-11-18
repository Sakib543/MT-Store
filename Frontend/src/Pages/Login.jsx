import { useState } from "react";
import loginImg from "../assets/Login.png";
const Login = () => {
  const [currState, setCurrState] = useState("SignUp");
  return (
    <section className="absolute top-0 left-0 h-full w-full z-50 bg-white">
      {/* container */}
      <div className=" flex h-full w-full">
        {/* form side */}
        <div className=" flex w-full sm:w-1/2 justify-center items-center">
          <form  className="flex flex-col items-center w-[90%] sm-max-w-md m-auto gap-y-5 text-gray-900">
            <div className="w-full mb-4">
              <h3 className="h3 font-bold">{currState}</h3>
            </div>
            {currState === "SignUp" && (
              <div className="w-full">
                <label htmlFor="name" className="medium-15">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-3 py-1.5 ring-slate-900/10 rounded bg-primary mt-1 "
                />
              </div>
            )}
            <div className="w-full">
              <label htmlFor="email" className="medium-15">Email</label>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1 "
              />
            </div>
            <div className="w-full">
              <label htmlFor="password" className="medium-15">Password</label>
              <input
                type="password"
                placeholder="Password"
                required
                className="w-full px-3 py-1.5 ring-slate-900 rounded bg-primary mt-1 "
              />
            </div>
            <button className="w-full btn-dark text-white rounded-lg font-bold shadow-lg">{currState === "SignUp" ? "SignUp" : "Login"}</button>
            <div className="w-full flex flex-col gap-y-2">
              <div className="medium-15 cursor-pointer">
               Forget Your Password? 
              </div>
              {currState === "Login" ? (
                <div className="medium-15 cursor-pointer">
                  Don`t have an account?
                  <span onClick={() => setCurrState("SignUp")} className="cursor-pointer">Create Account</span>
                </div>
              ):( 
              <div className="cursor-pointer medium-15">
                 Already have an account?
                <span onClick={() => setCurrState("Login")} className="cusror-pointer">Login</span>
              </div>
                )}
            </div>
          </form>
        </div>
        {/* image div */}
<div>
  <img src={loginImg} alt="" className="object-cover h-full w-full" />
</div>
      </div>
    </section>
  );
};

export default Login;
