import React, { useState } from "react";
import axios from "axios";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleDelete = () => {
    axios
      .delete(`http://localhost:5000/users/${id}`)
      .then((response) => {
        alert("User deleted successfully!");
        setId("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[pink]">
          <h2>Delete User</h2>
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
          <button onClick={handleDelete}>Delete User</button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
