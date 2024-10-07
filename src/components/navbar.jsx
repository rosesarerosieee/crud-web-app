import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[12vh] bg-red-500 flex items-center justify-end">
        <ul className="">
          <li>
            <Link to="/">Create User</Link>
          </li>
          <li>
            <Link to="read">List of User</Link>
          </li>
          <li>
            <Link to="update">Update User</Link>
          </li>
          <li>
            <Link to="delete">Delete User</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
