import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar(props) {
  let user;
  if (localStorage.currentUser) {
    user = JSON.parse(localStorage.currentUser);
  } else {
    user = false;
  }
  return (
    <ul className={styles.nav}>
      <li>
        <NavLink to="/"> 🛍️ The Job Shop Problem</NavLink>
      </li>
      <div className={styles.nav1}>
        {!user && (
          <li>
            <NavLink to="/login"> Login </NavLink>
          </li>
        )}

        {user && user.isAdmin && (
          <li>
            <NavLink to="/machines"> Machines </NavLink>
          </li>
        )}

        {user && user.isAdmin && (
          <li>
            <NavLink to="/job"> Job </NavLink>
          </li>
        )}

        {user && (
          <li>
            <NavLink to="/solve"> Solve </NavLink>
          </li>
        )}
        {user && (
          <li>
            <NavLink
              to="/login"
              onClick={() => {
                localStorage.removeItem("currentUser");
              }}
            >
              {" "}
              Log out{" "}
            </NavLink>
          </li>
        )}
      </div>
    </ul>
  );
}

export default NavBar;
