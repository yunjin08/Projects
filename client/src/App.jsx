import { useState, useEffect } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import axios from "axios";
import Sort from "./components/Sort";
import UserList from "./components/UserList";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
  const [listofUsers, setListofUsers] = useState([]);
  const [sortOption, setsortOption] = useState("none");
  const [filterUsers, setFilterUsers] = useState([]);

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

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
      setFilterUsers(response.data);
    });
  }, []);

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
      <Toggle createUser={createUser} />
      <div className="bg-primary  w-full overflow-hidden navbar-class">
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className="flex flex-1 mt-10 justify-center items-center w-full">
          <div className="w-full">
            <Sort setSortOption={setsortOption} filterUsers={filteredUsers} />
            <UserList filterUsers={filterUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
