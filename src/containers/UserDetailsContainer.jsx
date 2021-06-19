import React from "react";
import UserDetailsComponent from "components/UserDetailsComponent";
function UserDetailsContainer() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <div className="d-flex align-items-center justify-content-center ">
        <UserDetailsComponent user={user} />
      </div>
    </>
  );
}

export default UserDetailsContainer;
