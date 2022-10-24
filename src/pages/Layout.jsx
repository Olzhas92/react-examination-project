import React from "react";
import { Link, Outlet } from "react-router-dom";
import SignIn from "../components/SignIn";

import styles from "./Layout.module.css";

const Layout = () => {
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
            <Link to="/about" className={styles.link}>
              About
            </Link>
          </li>
          <li>
            <Link to="/blogs" className={styles.link}>
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={styles.link}>
              Contacts
            </Link>
          </li>
          <SignIn />
        </ul>
      </nav>

      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
