import React from "react";
import { Dropdown } from "react-bootstrap";

export const SideBar: React.FC = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString||"");

    const logout = () =>{
        sessionStorage.removeItem('user');
        window.location.href="/";
    }
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark">
          {user.firstName} {user.lastName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
