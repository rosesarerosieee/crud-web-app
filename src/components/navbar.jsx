import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[12vh] bg-red-500 flex items-center justify-center fixed top-0">
        <ul className="flex items-center justify-center w-full h-full gap-[20px]">
          <li>
            <Link to="/" className="cursor-pointer">
              Create User
            </Link>
          </li>
          <li>
            <Link to="read" className="cursor-pointer">
              List of User
            </Link>
          </li>
          <li>
            <Link to="update" className="cursor-pointer">
              Update User
            </Link>
          </li>
          <li>
            <Link to="delete" className="cursor-pointer">
              Delete User
            </Link>
          </li>
        </ul>

        
      </div>
    </>
  );
};

export default Navbar;
