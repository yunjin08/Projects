import { useState, useEffect } from "react";
import styles from "./style";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import axios from "axios";
import UserList from "./components/UserList";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [classlevel, setClasslevel] = useState(0);
  const [listofUsers, setListofUsers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sortOption, setsortOption] = useState("none");
  const [filterUsers, setFilterUsers] = useState([]);
  const [oldFilteredUsers, toOld] = useState([]);

  const createUser = (name, age, email, classlevel) => {
    if (name && age >= 0 && email && classlevel) {
      axios
        .post("http://localhost:3001/createUsers", {
          name: name,
          age: age,
          email: email,
          classlevel: classlevel,
        })
        .then((response) => {
          setFilterUsers((prevList) => [...prevList, response.data]);
          setListofUsers((prevList) => [...prevList, response.data]);
          setName("");
          setAge(0);
          setEmail("");
          setClasslevel(0);
          alert("Success, User Created");
          setToggle((prev) => !prev);
        });
    } else {
      alert(
        "Please fill out all required fields and and fill it with its proper format."
      );
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getUsers").then((response) => {
      setListofUsers(response.data);
      setFilterUsers(response.data);
      toOld(response.data);
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
      <Toggle
        createUser={createUser}
        name={name}
        age={age}
        email={email}
        classlevel={classlevel}
        setClasslevel={setClasslevel}
        setName={setName}
        setAge={setAge}
        setEmail={setEmail}
        toggle={toggle}
        setToggle={setToggle}
      />
      <div className="bg-slate-900  w-full overflow-hidden navbar-class">
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar
              setSortOption={setsortOption}
              filterUsers={filteredUsers}
              setFilterUsers={setFilterUsers}
              oldFilteredUsers={oldFilteredUsers}
            />
          </div>
        </div>
        <div className="flex flex-1 mt-10 justify-center items-center w-full">
          <div className="w-full">
            <UserList filterUsers={filterUsers} />
          </div>
        </div>
      </div>
    </div>
  );
}
