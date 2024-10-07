import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/users", {
        name: name,
        email: email,
        age: age,
      })

      .then((response) => {
        alert("User created successfully!");
        setName("");
        setEmail("");
        setAge("");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-start flex-col w-[300px] h-[50vh] bg-[pink]">
          <h2 className="text-black font-extrabold text-[2rem]">Create User</h2>
          <form onSubmit={handleSubmit} className="flex items-center justify-center flex-col pt-[20px]">
            <div className="flex flex-col gap-[20px]">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </div>
            <div className="">
              <button type="submit">Create User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
