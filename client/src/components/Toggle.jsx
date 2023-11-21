import { useState, useEffect } from "react";
import UserInputForm from "./UserInputForm";
import PropTypes from "prop-types";

export default function Toggle({
  createUser,
  name,
  age,
  email,
  setAge,
  setName,
  setEmail,
  toggle,
  setToggle,
  classlevel,
  setClasslevel,
}) {
  const container = document.querySelector(".navbar-class");

  useEffect(() => {
    if (container) {
      if (toggle) {
        container.classList.add("blur-[3px]");
      } else {
        container.classList.remove("blur-[3px]");
      }
    }
  }, [toggle]);
  return (
    <div>
      <button
        className="flex flex-col text-white px-12 py-[4px] absolute top-[175px] left-1/2 transform -translate-x-1/2 ss:top-[115px] ss:left-[5%] ss:transform-none ss:-translate-x-0
        border-[2px] border-slate-500 z-50 rounded-2xl hover:bg-slate-400 hover:text-black font-roboto font-medium"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {" "}
        Create a <br className="hidden"></br>User{" "}
      </button>
      <div
        className={`${
          toggle
            ? "w-[400px] h-[700px] bg-slate-gradient absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-2xl z-10"
            : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="pt-10 text-white font-bold font-poppins text-4xl">
            Create a User
          </h1>
          <div>
            <UserInputForm
              createdUser={createUser}
              name={name}
              age={age}
              email={email}
              setName={setName}
              setAge={setAge}
              setEmail={setEmail}
              classlevel={classlevel}
              setClasslevel={setClasslevel}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Toggle.propTypes = {
  createUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  setAge: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  setToggle: PropTypes.func.isRequired,
  classlevel: PropTypes.number.isRequired,
  setClasslevel: PropTypes.func.isRequired,
};
