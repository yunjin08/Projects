import { useState } from "react";
import Inputs from "./Inputs";

export default function UserInputForm({ createUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  return (
    <div className="flex items-center justify-center space-x-4 w-full">
      <Inputs
        type="text"
        placeholder="Name..."
        onChangeHandler={(event) => {
          setName(event.target.value);
        }}
      />
      <Inputs
        type="number"
        placeholder="Age..."
        onChangeHandler={(event) => {
          setAge(event.target.value);
        }}
      />
      <Inputs
        type="text"
        placeholder="Username..."
        onChangeHandler={(event) => {
          setUsername(event.target.value);
        }}
      />

      <button
        onClick={() => createUser(name, age, username)}
        className="text-white font-mono  border-[1px] px-2  hover:text-black hover:bg-white"
      >
        {" "}
        Create User{" "}
      </button>
    </div>
  );
}
