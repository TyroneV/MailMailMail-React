import React, { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../actions/actions";
import { RootStore } from "../reducers";
import { UserState } from "../states/states";

export const SideBar: React.FC = () => {
  const userString = sessionStorage.getItem("user");
  const sessionUser = JSON.parse(userString||"");
  const dispatch = useDispatch();
  const user = useSelector((state: RootStore) => state.login);

  useEffect(() => {
    setUser(sessionUser);
  }, []);

  const setUser = (u: UserState) => {
    dispatch(onLogin(u));
  };
    const logout = () =>{
        sessionStorage.clear();
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
