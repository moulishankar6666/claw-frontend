import { ProfileContainer } from "./StyledComponents";

// images
import maleProfile from "../../Images/male profile.jpg";
// import femaleProfile from "../../Images/female profile.jpg";

//icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

//hook
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

//component
import NavBar from "../NavBar";

//context
import { projectListContext } from "../../App";

//package
import Cookies from "js-cookie";

const Profile = () => {
  const { userInfo } = useContext(projectListContext);
  const navigate = useNavigate();

  const onClickLogout = () => {
    if (window.confirm("click OK to Logout")) {
      Cookies.remove("user");
      navigate("/");
    }
  };
  if (userInfo) {
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
            {/* <img
            src={userInfo.gender === "Male" ? maleProfile : femaleProfile}
            alt="profile-img"
          /> */}
            <img src={maleProfile} alt="profile-img" />
            <h3>
              {userInfo.firstname.charAt(0).toUpperCase() +
                userInfo.firstname.slice(1) +
                " " +
                userInfo.lastname.charAt(0).toUpperCase() +
                userInfo.lastname.slice(1)}
            </h3>
          </div>
          <div className="user-details">
            <div>
              <h4>Email :</h4>
              <p>{userInfo.email}</p>
            </div>
            {/* <div>
            <h4> :</h4>
            <p>{userInfo.}</p>
          </div> */}
          </div>
          <button onClick={onClickLogout}>Logout</button>
        </div>
        <NavBar />
      </ProfileContainer>
    );
  } else {
    return <Navigate replace to={"/"}></Navigate>;
  }
};

export default Profile;
