import React, { useState } from "react";
import axios from "axios";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/users/${id}`, { name, email, age })
      .then((response) => {
        alert("User updated successfully!");
        setId("");
        setName("");
        setEmail("");
        setAge("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[whitesmoke]">
          <h2 className="font-extrabold text-[2rem]">Update User</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center">
              <input
                type="text"
                placeholder="User ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="pt-[30px]">
              <button
                type="submit"
                className="w-[150px] h-[50px] text-center rounded-[5px]  bg-[whitesmoke]"
              >
                Update User
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
