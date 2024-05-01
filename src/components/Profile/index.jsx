import { ProfileContainer } from "./StyledComponents";

// images
import maleProfile from "../../Images/male profile.jpg";
import femaleProfile from "../../Images/female profile.jpg";

//icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

//hook
import { useNavigate } from "react-router-dom";

//component
import NavBar from "../NavBar";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const navigate = useNavigate();

  const onClickLogout = () => {
    localStorage.removeItem("userDetails");
    navigate("/");
  };
  return (
    <ProfileContainer>
      <header>
        <button onClick={() => navigate("/home")}>
          <IoArrowBackCircle />
        </button>
        <h3>Your Profile</h3>
        <button>
          <IoMdNotifications />
        </button>
      </header>
      <div className="card-container">
        <div className="username">
          <img
            src={user.gender === "Male" ? maleProfile : femaleProfile}
            alt="profile-img"
          />
          <h3>
            {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
          </h3>
        </div>
        <div className="user-details">
          <div>
            <h4>Email :</h4>
            <p>{user.email}</p>
          </div>
          <div>
            <h4>Gender :</h4>
            <p>{user.gender}</p>
          </div>
        </div>
        <button onClick={onClickLogout}>Logout</button>
      </div>
      <NavBar />
    </ProfileContainer>
  );
};

export default Profile;
