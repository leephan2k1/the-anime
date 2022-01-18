import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./styles.scss";
import "animate.css";
import { browsePagePath, homePagePath, signInPagePath } from "constants/path";
import firebase from "firebase/compat/app";

export default function NavBar(props) {
  const [isActive, setActive] = useState(false);
  const [toggleUser, setToggleUser] = useState(false);
  const { userImg, isSignedIn, setIsSignedIn } = props;

  //Active css scroll
  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    // console.log(isActive);

    //CSS active
    const navBar = document.querySelector(".navBar");
    if (isActive) {
      navBar.style.cssText = "background-color: #000";
    } else {
      navBar.style.cssText = "background-color: transparent;";
    }

    //cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isActive]);

  //Active css dropdown user menu
  useEffect(() => {
    const userDropDownDOM = document.querySelector(".user__dropdown");
    const appDOM = document.querySelector(".Anime-app");

    const hiddenDropdown = () => {
      userDropDownDOM.style.cssText = "display: none";
    };

    appDOM.addEventListener("click", hiddenDropdown);

    return () => {
      userDropDownDOM.style.cssText = "display: none";
      appDOM.removeEventListener("click", hiddenDropdown);
    };
  }, []);

  const activeUser = () => {
    const userDropDownDOM = document.querySelector(".user__dropdown");
    if (!toggleUser) {
      userDropDownDOM.style.cssText = "display: flex";
    } else {
      userDropDownDOM.style.cssText = "display: none";
    }
    setToggleUser((prev) => !prev);
  };

  const handleSignOut = async () => {
    await firebase.auth().signOut();
    if (setIsSignedIn) {
      setIsSignedIn(false);
      window.location.reload();
    }
  };

  return (
    <nav className="navBar w-full d-flex align-items-center">
      <Container className="w-full h-full d-flex justify-content-around">
        <NavLink
          className="navBar__logo h-full d-flex justify-content-center align-items-center"
          to={`${homePagePath}`}
        >
          Anime Zone
        </NavLink>

        <ul className="navBar__list justify-content-evenly align-items-center h-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${browsePagePath}/category`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Thể loại
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${browsePagePath}/new`}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Mới nhất
            </NavLink>
          </li>
        </ul>
        <div className="navBar__right-wrapper d-flex justify-content-center align-items-center">
          <div className="user h-full d-flex align-items-center">
            <i className="bi bi-list me-4"></i>
            <div className="user__img d-flex" onClick={activeUser}>
              {userImg ? (
                <img src={userImg} alt="avatar" />
              ) : (
                <i className="bi bi-person-circle"></i>
              )}
            </div>
            <div className="user__dropdown justify-content-center align-items-center">
              {isSignedIn ? (
                <a onClick={handleSignOut}>Đăng xuất</a>
              ) : (
                <Link to={`${signInPagePath}`}>Đăng nhập</Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
