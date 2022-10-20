import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile__screen">
      <Nav />
      <div className="profile__screenBody">
        <h1>Edit Profile</h1>
        <div className="profile__screenInfo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile__screenDetails">
            <h2>{user.email}</h2>
            <div className="profile__screenPlans">
                <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profile__screenSignout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
