import { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import closeBtn from "../assets/img/close.svg";

const Modal = ({ setLogin }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "scroll");
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setLogin(false)}
        className=" fixed top-0 bottom-0 left-0 right-0 bg-gray-300/50 backdrop-blur"
      ></div>
      <div className=" fixed top-1/2 left-1/2 shadow-sm transform -translate-x-1/2 -translate-y-1/2 w-96 h-fit bg-white rounded-lg p-2 text-gray-700">
        <span
          className=" float-right cursor-pointer"
          onClick={() => setLogin(false)}
        >
          <img width="20" src={closeBtn} />
        </span>
        <h1 className=" text-2xl font-bold tracking-wide text-center p-1">
          Log In
        </h1>
        <div className=" rounded-md text-sm font-normal">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
          >
            <Form className="flex flex-col w-full p-5">
              <label htmlFor="email">Email</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              <label htmlFor="password">Password</label>
              <Field
                className="p-3 outline-none border border-gray-200 rounded-md mt-1 mb-3"
                id="password"
                name="password"
                placeholder="Enter your password"
                type="password"
              />
              <p className="text-blue-600 hover:text-blue-500 px-1 cursor-pointer text-sm">
                Forgot Password?
              </p>
              <button
                className=" py-3 px-4 bg-blue-600 rounded-md text-white w-40 mt-5 mx-auto tracking-wide hover:bg-blue-500"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </>,
    document.querySelector(".modal")
  );
};

export default Modal;
