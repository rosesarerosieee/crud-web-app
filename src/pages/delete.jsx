import React, { useState } from "react";
import { deleteUser } from "../api/api";
import CardContainer from "../components/card";

const DeleteUser = () => {
  const [id, setId] = useState("");

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      setId("");
      alert("Succesfully delete the user");
    } catch (err) {
      alert("Error deleting the user");
    }
  };

  return (
    <>
      <CardContainer title={"Delete User"}>
        <div className="">
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            className="font-extrabold xl:w-[300px] xl:h-[50px] xl:text-center"
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
      </CardContainer>
    </>
  );
};

export default DeleteUser;
