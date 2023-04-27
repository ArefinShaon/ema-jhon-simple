import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })

      .catch((error) => {
        console.error(error);
        setPasswordError(error.message);
      });
  };

  return (
    <div className="flex justify-center text-black py-20">
      <div className="card w-full max-w-lg shadow-2xl bg-green-50">
        <h1 className="font-bold text-4xl text-center pt-6 ">
          Create An Account
        </h1>
        <form onSubmit={handleSignUp} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Email Address</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered border-zinc-900 bg-white"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-black">Password</span>
            </label>

            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered border-zinc-900 bg-white"
            />

            <label className="label text-purple-700">
              <Link to="/login" className=" text-purple-900 font-semibold">
                Login
              </Link>
            </label>
          </div>
          <div className="flex justify-start">
           
                    
                      <div className="form-control mt-6">
        <input type="submit"  className="btn btn-outline-danger  btn-success text-white" value="signUp"/>
       {/* <button type='submit'>Sign Up</button> */}
     </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
