import React from "react";
import phone1 from "../../Assets/phone1.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { request } from "../../axios/axios";
import { toast } from "react-toastify";
import { useSearch } from "../context/SearchContext";

export default function Login() {
  const {  setIsLoggedOut } = useSearch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await request
      .post("/users/SignIn", data)
      .then((result) => {
        console.log(result);
        if (result?.data?.data?._id) {
          toast.success("login successfuly");
          localStorage.setItem("token", result?.data?.token);
          localStorage.setItem("roleUser", result?.data?.data?.role);
          localStorage.setItem("user", JSON.stringify(result?.data?.data));
          setIsLoggedOut(true);
        }
      })
      .catch((error) => {
        toast.error("email or password is Wrong");
      });
  }
  return (
    <div className="row">
      <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center mt-5">
        <img className="phone2 w-100" src={phone1} alt="" />
      </div>

      <div className="col-lg-7 mt-5">
        <div className="d-flex justify-content-center align-items-center text-center signup-container">
          <div className="bg-light bg-opacity-25 shadow w-100 mx-auto rounded-2 login px-3">
            <h1 className="fw-bold">Login Now</h1>
            <div className="pt-3">
              <form>
                <input
                  className="form-control my-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  {...register("email", { required: "email is required" })}
                />
                {errors.email && (
                  <small className="text-red-400 flex justify-start">
                    {errors.email.message}
                  </small>
                )}
                <input
                  className="form-control my-2"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "password is required",
                  })}
                />
                {errors.password && (
                  <small className="text-red-400 flex justify-start">
                    {errors.password.message}
                  </small>
                )}
                <br />
                <button className=" border-0 bg-transparent text-danger mt-2">
                  Forget Password?
                </button>

                <button
                  type="submit"
                  className="btn btn-info text-dark w-100 rounded-2 my-1"
                  onClick={handleSubmit(onSubmit)}
                >
                  {isSubmitting ? "Loading..." : "Login"}
                </button>
              </form>
              <p>
                Don't Have Account ?{" "}
                <Link to={"/register"} className=" text-decoration-none">
                  Register
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
