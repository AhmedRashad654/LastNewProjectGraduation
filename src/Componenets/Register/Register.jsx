import React from "react";
import { Link } from "react-router-dom";
import phone1 from "../../Assets/phone1.png";
import "./Register.css";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { request } from "../../axios/axios";
export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  const password = watch("password");
  async function onSubmit(data) {
    await request
      .post("/users", data)
      .then((result) => {
        console.log(result);
        if (result?.data?.data?._id) {
          toast.success("Create Account successfuly");
        }
      })
      .catch((error) => {
        toast.error(error?.response?.message);
      });
  }
  return (
    <div className="row m-5">
      <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
        <img className="w-100 phone1" src={phone1} alt="" />
      </div>

      <div className="col-lg-7">
        <div className=" d-flex justify-content-center align-items-center text-center signup-container">
          <div className="bg-light bg-opacity-25 shadow w-100 mx-auto  p-5 rounded-2">
            <h1 className="fw-bold">Create an Account</h1>
            <div className="pt-3">
              <form>
                <input
                  className="form-control my-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  {...register("name", { required: "name is required" })}
                />
                {errors.name && (
                  <small className="text-red-400 flex justify-start">
                    {errors.name.message}
                  </small>
                )}
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
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 characts long",
                    },
                  })}
                />
                {errors.password && (
                  <small className="text-red-400 flex justify-start">
                    {errors.password.message}
                  </small>
                )}
                <input
                  className="form-control my-2"
                  type="password"
                  name="PasswordConfirm"
                  id="PasswordConfirm"
                  placeholder="Enter Your PasswordConfirm"
                  {...register("PasswordConfirm", {
                    required: "PasswordConfirm is required",
                    minLength: {
                      value: 8,
                      message: "password must be at least 8 characts long",
                    },
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.PasswordConfirm && (
                  <small className="text-red-400 flex justify-start">
                    {errors.PasswordConfirm.message}
                  </small>
                )}
                <input
                  className="form-control my-2"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Enter Your address"
                  {...register("address", {
                    required: "address is required",
                  })}
                />
                {errors.address && (
                  <small className="text-red-400 flex justify-start">
                    {errors.address.message}
                  </small>
                )}
                <input
                  className="form-control my-2"
                  type="hidden"
                  name="role"
                  value="Buyer"
                  placeholder="Enter Your address"
                  {...register("role", {
                    required: "role is required",
                  })}
                />
                <button
                  type="submit"
                  className="btn btn-info text-dark w-100 rounded-2 m-2"
                  onClick={handleSubmit(onSubmit)}
                >
                  {isSubmitting ? "Loading..." : "Create Account"}
                </button>
              </form>
              <p>
                Already Have Account ?{" "}
                <Link to={"/login"} className=" text-decoration-none">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
