import Inputs from "./Inputs";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export default function UserInputForm({
  createdUser,
  name,
  age,
  email,
  setAge,
  setName,
  setEmail,
  classlevel,
  setClasslevel,
}) {
  const [emails, setEmails] = useState("");
  const [isValidEmail, setIsValidEmail] = useState("");

  const validateEmail = (input) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailPattern.test(input);
  };

  useEffect(() => {
    setIsValidEmail(validateEmail(emails));
  }, [emails]);

  return (
    <div
      className="flex flex-col mt-8 items-center justify-center text-white space-y-8 font-roboto
    "
    >
      <div>
        <h4>Name</h4>
        <Inputs
          type="text"
          placeholder="Enter your name"
          onChangeHandler={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <h4>Age</h4>
        <Inputs
          type="number"
          placeholder="Enter your age"
          onChangeHandler={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <div>
        <h4>Email</h4>
        <Inputs
          type="email"
          placeholder="Enter your email"
          onChangeHandler={(event) => {
            const inputeEmail = event.target.value;
            setEmails(inputeEmail);
            setIsValidEmail(validateEmail(inputeEmail));

            if (isValidEmail) {
              setEmail(inputeEmail);
            }
          }}
          value={emails}
        />
        {!isValidEmail && emails && (
          <p className="text-red-500 text-xs mt-1">
            Please enter a valid email address
          </p>
        )}
      </div>

      <div>
        <h4>Class Level</h4>
        <Inputs
          type="number"
          placeholder="Enter your class Level"
          onChangeHandler={(event) => {
            setClasslevel(event.target.value);
          }}
        />
      </div>

      <button
        onClick={() => createdUser(name, age, email, classlevel)}
        className="text-white font-mono  border-[1px] w-[300px] rounded-2xl hover:text-black hover:bg-white py-1"
      >
        {" "}
        Create User{" "}
      </button>
      <h4 className="pt-[-10px] text-[14px]"> Or Sign Up Using</h4>
      <div className="flex w-8 h-8 items-center justify-center space-x-4">
        <img
          src="./facebook.png"
          alt="facebook"
          className="rounded-full w-7 h-7 hover:cursor-pointer"
        />
        <img
          src="./twitter3.jpg"
          alt="twitter"
          className="rounded-full hover:cursor-pointer"
        />
        <img
          src="./gmail.webp"
          alt="gmail"
          className="rounded-full hover:cursor-pointer"
        />
      </div>
    </div>
  );
}

UserInputForm.propTypes = {
  createdUser: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  setAge: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
  classlevel: PropTypes.number.isRequired,
  setClasslevel: PropTypes.func.isRequired,
};
