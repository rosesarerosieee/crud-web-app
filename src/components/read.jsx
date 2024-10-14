import React, { useState, useEffect } from "react";
import { getUsers } from "../api/api"; // Assuming the API file is located here

const ReadUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        setError("Error fetching users.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[whitesmoke]">
      <div className="flex items-center justify-start flex-col w-[500px] h-auto bg-[#e1d9d7] p-5">
        <h2 className="text-black font-extrabold text-[2rem] mb-[20px]">
          Users List
        </h2>
        {error ? (
          <p>{error}</p>
        ) : (
          <table className="table-auto w-full text-center">
            <thead>
              <tr className="bg-[whitesmoke]">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Age</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="bg-white border-b">
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ReadUsers;
