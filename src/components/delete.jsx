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
        <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[#e1d9d7] gap-[20px]">
          <h2 className="font-extrabold text-[2rem]">Delete User</h2>
          <div className="">
            <input
              type="text"
              placeholder="User ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              required
              className="text-center"
            />
          </div>
          <div className="pt-[20px]">
            <button
              onClick={handleDelete}
              className="w-[150px] h-[50px] text-center rounded-[5px]  bg-[whitesmoke]"
            >
              Delete User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
