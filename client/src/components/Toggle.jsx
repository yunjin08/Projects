import { useState, useEffect } from "react";
import UserInputForm from "./UserInputForm";

export default function Toggle({ createUser }) {
  const [toggle, setToggle] = useState(false);
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
        className="flex flex-col text-white px-3 font-mono absolute top-[24px] right-[45px] border-[4px] border-double border-slate-500 z-50"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        {" "}
        Create a <br className="sm:hidden"></br>User{" "}
      </button>
      <div
        className={`${
          toggle
            ? "w-[400px] h-[600px] bg-slate-gradient absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-2xl z-10"
            : "hidden"
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="pt-10 text-white font-bold font-poppins text-4xl">
            Create a User
          </h1>
          <div>
            <UserInputForm createdUser={createUser} />
          </div>
        </div>
      </div>
    </div>
  );
}
