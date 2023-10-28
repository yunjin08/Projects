import { useState, useEffect } from "react";
import axios from "axios";
import UserInputForm from "./UserInputForm";
import Sort from "./Sort";
import UserList from "./UserList";

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
          setFilterUsers((prevList) => [...prevList, response.data]);
          setListofUsers((prevList) => [...prevList, response.data]);
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
        return user.age >= 60;
      } else if (sortOption === "option2") {
        return user.age >= 30 && user.age < 60;
      } else if (sortOption === "option3") {
        return user.age >= 18 && user.age < 30;
      } else if (sortOption === "option4") {
        return user.age < 18 && user.age >= 0;
      } else {
        return true;
      }
    });
    setFilterUsers(filterUsers);
  };

  return (
    <div>
      <UserInputForm createUser={createUser} />
      <Sort setSortOption={setsortOption} filterUsers={filteredUsers} />
      <UserList filterUsers={filterUsers} />
    </div>
  );
}
