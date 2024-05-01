import { RiHome5Fill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
// import { FaCirclePlus } from "react-icons/fa6";
import { BiSolidFile } from "react-icons/bi";
import { IoMdContacts } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

import { NavContainer } from "./StyledComponent";

import { Link } from "react-router-dom";

const NavBar = () => {
  const path = window.location.pathname;

  return (
    <NavContainer>
      <Link className="nav-link" to="/home">
        <button>
          <RiHome5Fill color={path === "/home" ? "#171747" : "#5959bc"} />
        </button>
      </Link>
      <Link className="nav-link" to="/schedule">
        <button>
          <IoCalendar color={path === "/schedule" ? "#171747" : "#5959bc"} />
        </button>
      </Link>
      <Link className="add-new" to="/add-new">
        <button>
          <IoCloseCircle />
        </button>
      </Link>
      <Link className="nav-link">
        <button>
          <BiSolidFile color={path === "/summary" ? "#171747" : "#5959bc"} />
        </button>
      </Link>
      <Link className="nav-link" to="/profile">
        <button>
          <IoMdContacts color={path === "/profile" ? "#171747" : "#5959bc"} />
        </button>
      </Link>
    </NavContainer>
  );
};

export default NavBar;
