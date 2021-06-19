import React from "react";
import NavBarComponent from "components/NavbarComponent";
import { useSelector } from "react-redux";

function NavbarContainer() {
  const state = useSelector((state) => state.login);
  const logoutHandler = () => {
    localStorage.removeItem("user");
  };
  const name = JSON.parse(localStorage.getItem("user")).full_name;
  console.log(name);
  return (
    <>
      <NavBarComponent name={name} logoutHandler={logoutHandler} />
    </>
  );
}

export default NavbarContainer;
