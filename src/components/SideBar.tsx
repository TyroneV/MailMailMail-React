import React from "react";
import { Dropdown } from "react-bootstrap";
import { useHistory } from "react-router";

export const SideBar: React.FC = () => {
    const userString = sessionStorage.getItem("user");
    const user = JSON.parse(userString||"");
    const history = useHistory();

    const logout = () =>{
        sessionStorage.removeItem('user');
        history.push("/");
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
