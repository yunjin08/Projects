import { useState, useEffect } from "react";
import Inputs from "./Inputs";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import PlainNavbar from "./PlainNavbar";
import styles from "../style";

export default function Update() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers/" + id).then((response) => {
      console.log(response);
      setName(response.data.name);
      setAge(response.data.age);
      setUsername(response.data.username);
    });
  }, []);

  const Update = () => {
    if (name && age >= 0 && username) {
      axios
        .put("http://localhost:3001/updateUser/" + id, {
          name: name,
          age: age,
          username: username,
        })
        .then((response) => {
          alert("Success, User Edited");
          navigate("/");
        });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="bg-slate-900  w-full overflow-hidden navbar-class">
      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <PlainNavbar />
        </div>
      </div>
      <div
        className=" mt-5  text-white font-roboto flex items-center justify-center 
      "
      >
        <div className="w-[400px] h-[600px] flex flex-col space-y-8  items-center justify-center border-2 bg-slate-gradient rounded-lg">
          <h1 className="pt-10 text-white font-bold font-poppins text-4xl">
            Update a User
          </h1>
          <div>
            <h4>Name</h4>
            <Inputs
              type="text"
              value={name}
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
              value={age}
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
              value={username}
              placeholder="Type your username"
              onChangeHandler={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>

          <button
            onClick={() => Update(name, age, username)}
            className="text-white font-mono  border-[1px] w-[300px] rounded-2xl hover:text-black hover:bg-white py-1"
          >
            Update
          </button>
          <h4 className="pt-[-10px] text-[14px]"> Or Update Using</h4>
          <div className="flex w-8 h-8 items-center justify-center space-x-4">
            <img
              src="/facebook.png"
              alt="facebook"
              className="rounded-full w-7 h-7 hover:cursor-pointer"
            />
            <img
              src="/twitter3.jpg"
              alt="twitter"
              className="rounded-full hover:cursor-pointer"
            />
            <img
              src="/gmail.webp"
              alt="gmail"
              className="rounded-full hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
