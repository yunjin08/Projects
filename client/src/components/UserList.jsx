import React from "react";
import PropTypes from "prop-types";

export default function UserList({ filterUsers }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {filterUsers.map((user) => {
        return (
          <div
            key={user.id}
            className="text-xl m-5 text-white text-center font-mono border-2"
          >
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Username: {user.username}</h1>
          </div>
        );
      })}
    </div>
  );
}

UserList.propTypes = {
  filterUsers: PropTypes.array.isRequired, // Define PropTypes for filterUsers
};
