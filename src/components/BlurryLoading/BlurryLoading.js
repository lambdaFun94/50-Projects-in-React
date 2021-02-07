import { useState } from "react";
import { FaRedo } from "react-icons/fa";

import styles from "./BlurryLoading.module.css";
import useInterval from "./useInterval";

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const BlurryLoading = () => {
  const [loading, setLoading] = useState(0);
  const [gt100, setGt100] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const reset = () => {
    setLoading(0);
    setGt100(false);
    setIsClicked(false);
  };

  const countTo100 = () => {
    if (isClicked) {
      setLoading(loading + 1);
      loading > 98 && setGt100(true);
    } else {
      return () => {};
    }
  };

  useInterval(countTo100, gt100 ? null : 30);

  let blurriness = scale(loading, 0, 100, 30, 0);
  let opacity = scale(loading, 0, 100, 1, 0);
  let fontSize = scale(loading, 0, 100, 25, 0);

  return (
    <div className={styles.container}>
      <section
        className={styles.bg}
        style={{ filter: `blur(${blurriness}px)`, marginTop: "15px" }}
      ></section>
      <button
        className={styles.btn}
        style={{ opacity: `${opacity}`, fontSize: `${fontSize}px` }}
        onClick={setIsClicked}
      >
        {isClicked ? <>{loading}%</> : <>Load Image</>}
      </button>
      {gt100 && (
        <button className={styles.redo} onClick={reset}>
          <FaRedo />
        </button>
      )}
    </div>
  );
};

export default BlurryLoading;
