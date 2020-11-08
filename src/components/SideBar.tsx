import React from "react";
import { Dropdown } from "react-bootstrap";

export const SideBar: React.FC = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="dark">
          User's Name Here
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/editUser">Edit User</Dropdown.Item>
          <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};
