import React from "react";
import styles from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div>
      <div className={styles.circleContainer}>
        <div class={styles.circle}></div>
      </div>
      {props.children}
      <div>
        <nav>
          <ul>
            <li>
              <i class="fas fa-home"></i> Home
            </li>
            <li>
              <i class="fas fa-user-alt"></i> About
            </li>
            <li>
              <i class="fas fa-envelope"></i> Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
