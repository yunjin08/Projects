import { useState, useEffect } from "react";

export default function Toggle() {
  const [toggle, setToggle] = useState(false);
  const container = document.querySelector(".navbar-class");
  useEffect(() => {
    if (container) {
      if (toggle) {
        container.classList.add("blur-[2px]");
      } else {
        container.classList.remove("blur-[2px]");
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
            ? "w-[400px] h-[480px] bg-slate-gradient absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-lg z-10"
            : "hidden"
        }`}
      >
        <div className="flex items-center justify-center">
          <h1 className="pt-10 text-white font-poppins text-3xl">
            Create a User
          </h1>
        </div>
      </div>
    </div>
  );
}
