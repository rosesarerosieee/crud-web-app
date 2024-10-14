import React, { useState } from "react";
import { updateUser } from "../api/api";

const UpdateUser = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUser(id, { name, email, age });
      alert("Updated Successfully!");
      setId("");
      setName("");
      setEmail("");
      setAge("");
    } catch (err) {
      alert("Error Updating data");
    }
  };

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-[whitesmoke">
        <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[#e1d9d7]">
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
