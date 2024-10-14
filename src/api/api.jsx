import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/users", userData);
    return response.data;
  } catch (err) {
    console.error("Failed to create a user", err);
    throw err;
  }
};
export const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (err) {
    console.log("Failed to fetch Data", err);
    throw err;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.update(
      `http://localhost:5000/users/${id}`,
      userData
    );
    return response.data;
  } catch (err) {
    console.log("Failed to update data", err);
    throw err;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/users/${id}`);
    return response.data;
  } catch (err) {
    console.log("Failed to delete data", err);
    throw err;
  }
};
