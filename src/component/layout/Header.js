import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../actions/modalAction";
import React from "react";
import Login from "../Login";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const openModalHandle = () => {
    dispatch(openModal("open", <Login />));
  };
  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVE26v5xVIIb7NPImnm9s1sgZDX-gwyS5Zg&s"
        className="header_logo"
        alt="logo"
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header_right">
        <p>Become a host</p>
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon className="dropbtn" />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Acount</span>
                <span>Log Out</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={openModalHandle}>Log in</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>

        <Avatar />
      </div>
    </div>
  );
};

export default Header;
