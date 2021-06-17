import React from "react";
import NavBarComponent from "components/NavbarComponent";
import { useSelector } from "react-redux";

function NavbarContainer() {
  const state = useSelector((state) => state.login);

  return (
    <>
      <NavBarComponent name={state.user.full_name} />
    </>
  );
}

export default NavbarContainer;
