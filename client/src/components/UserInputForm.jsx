import Inputs from "./Inputs";

export default function UserInputForm({
  createdUser,
  name,
  age,
  username,
  setAge,
  setName,
  setUsername,
}) {
  return (
    <div
      className="flex flex-col mt-8 items-center justify-center text-white space-y-8 font-roboto
    "
    >
      <div>
        <h4>Name</h4>
        <Inputs
          type="text"
          placeholder="Type your name"
          onChangeHandler={(event) => {
            setName(event.target.value);
          }}
        />
      </div>
      <div>
        <h4>Age</h4>
        <Inputs
          type="number"
          placeholder="Type your age"
          onChangeHandler={(event) => {
            setAge(event.target.value);
          }}
        />
      </div>
      <div>
        <h4>Username</h4>
        <Inputs
          type="text"
          placeholder="Type your username"
          onChangeHandler={(event) => {
            setUsername(event.target.value);
          }}
        />
      </div>

      <button
        onClick={() => createdUser(name, age, username)}
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
