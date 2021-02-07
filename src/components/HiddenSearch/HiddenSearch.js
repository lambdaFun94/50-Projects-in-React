import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./HiddenSearch.module.css";

const HiddenSearch = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={styles.container}>
      <input
        className={`${styles.input} ${isActive ? styles.activeInput : ""}`}
        type="text"
        placeholder="Search..."
      />
      <button
        onClick={handleToggle}
        className={`${styles.btn} ${isActive ? styles.activeBtn : ""}`}
      >
        <FaSearch />
      </button>
    </div>
  );
};

export default HiddenSearch;
