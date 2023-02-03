import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userRegister = useSelector((state) => state.userRegister);
  let { loading } = userRegister;
  const [formData, setFormData] = useState([]);

  const handleSubmit = async () => {
    console.log(formData);
    if (
      Object.keys(formData).some((key) => formData[key] === "") ||
      Object.keys(formData).length < 4
    ) {
      alert("all fields are required");
    } else {
      dispatch(register(formData))
        .then((response) => {
          console.log("response", response);
          if (response.data.success) {
            alert(response.data.message);
            navigate("/login");
          } else {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="container md:w-5/12 w-full mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <div>
              <h1 className="mb-8 text-3xl text-center">Sign up</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="firstname"
                placeholder="First Name"
                onChange={handleChange}
              />
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="lastname"
                placeholder="Last Name"
                onChange={handleChange}
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
                onClick={handleSubmit}
              >
                {loading ? "Please wait..." : "Create"}
              </button>

              <div className="text-grey-dark mt-6">
                Already have an account?
                <Link to={"/login"}>
                  <span className="text-blue-500 no-underline border-b border-blue-500 text-blue">
                    Log in
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
