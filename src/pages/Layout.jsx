import React from "react";
import { Link, Outlet } from "react-router-dom";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

import styles from "./Layout.module.css";

const Layout = () => {
  const [user] = useAuthState(auth);

  return (
    <React.Fragment>
      <nav className={styles.layout}>
        <ul className={styles.nav}>
          <li>
            <Link to="/" className={styles.link}>
              Movies
            </Link>
          </li>
          <li>
            <Link to="/heroes" className={styles.link}>
              Heroes
            </Link>
          </li>
          <li>
            <Link to="/spaceships" className={styles.link}>
              Spaceships
            </Link>
          </li>
          <li>
            <Link to="/adding-movie" className={styles.link}>
              Add New Movie
            </Link>
          </li>
          {user ? "" : <SignIn />}
          {user ? <SignOut /> : ""}
        </ul>
      </nav>

      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
