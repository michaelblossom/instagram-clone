import React from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
  let navigate = useNavigate();
  console.log(navigate);
  console.log("hello");
  return (
    <>
      <section className="m-auto w-96 h-[450px] p-6 border mt-16 shadow">
        <div className="mb-8">
          <h2 className="font-bold text-3xl text-center">Instagram</h2>
        </div>
        <div>
          <input
            type="text"
            className="border-gray-300 border px-2 py-2 w-full rounded"
            placeholder="Mobile Number or Email"
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            className="border-gray-300 border px-2 py-2 w-full rounded"
            placeholder="Full Name"
          />
        </div>
        <div>
          <Link>
            <button
              className="bg-primary text-center px-2 py-2 mt-7 text-white w-full rounded"
              onClick={() => {
                console.log("Button Clicked");
                navigate("/status");
              }}
            >
              Login
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-7 items-center mt-4">
          <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
          <div className="col-span-1">Or</div>
          <div className="col-span-3 h-[1px] w-32 bg-gray-300"></div>
        </div>
        <div className="flex items-center mt-8 justify-center">
          <div>
            <FaFacebook size={30} color={"#AE2EAF"} />
          </div>
          <div className="ml-3">
            <p className="text-md">Login With FaceBook</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex justify-center items-center">
            <small>Forgot Password</small>
          </div>
        </div>
      </section>
      <section className="h-[123px] w-96 shadow borde p-6 mt-6 m-auto flex items-center justify-center">
        <div className="">
          Don’t have an account?{" "}
          <span className="text-primary font-normal">Sign up</span>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
