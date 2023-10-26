import { useState, useEffect } from "react";
import Inputs from "./Inputs";
import axios from "axios";

export default function UserDisplay() {
  const [listofUsers, setListofUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [sortOption, setsortOption] = useState("none");
  const [filterUsers, setFilterUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
      setFilterUsers(response.data);
    });
  }, []);

  const createUser = () => {
    if (name && age && username) {
      axios
        .post("http://localhost:3001/createUsers", {
          name: name,
          age: age,
          username: username,
        })
        .then((response) => {
          setListofUsers([...listofUsers, response.data]);
          setName("");
          setAge(0);
          setUsername("");
          alert("Success, User Created");
        });
    } else {
      alert("Please fill out all required fields.");
    }
  };

  const filteredUsers = () => {
    const filterUsers = listofUsers.filter((user) => {
      if (sortOption === "none") {
        return user;
      } else if (sortOption === "option1") {
        return user.age > 30;
      } else if (sortOption === "option2") {
        return user.age < 30 && user.age > 0;
      } else if (sortOption === "option3") {
        return user.age == null || user.age === "";
      } else {
        return true;
      }
    });
    setFilterUsers(filterUsers);
  };

  return (
    <div>
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
          onClick={createUser}
          className="text-white font-mono  border-[1px] px-2  hover:text-black hover:bg-white"
        >
          {" "}
          Create User{" "}
        </button>
      </div>
      <div className="space-x-3 flex items-center justify-center mt-4">
        <select
          name="Sort by Age"
          id="age"
          onChange={(event) => {
            setsortOption(event.target.value);
          }}
        >
          <option value="none"> None </option>
          <option value="option1"> Age &gt; 30</option>
          <option value="option2"> Age &lt; 30 </option>
          <option value="option3"> No Age </option>
        </select>
        <button
          onClick={filteredUsers}
          className="text-white font-mono border-[1px] px-2  hover:text-black hover:bg-white"
        >
          {" "}
          Filter User
        </button>
      </div>
      <div>
        {filterUsers.map((user) => {
          return (
            <div key={user.id} className="text-2xl m-5 text-white">
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
