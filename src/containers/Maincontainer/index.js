import React from "react";
import styles from "./maincontainer.module.css";

const MainContainer = (WrappedComponent) => () => {
  return (
    <section className={styles.container}>
      <img
        src={require("../../img/bcLogo2.PNG")}
        alt="Best Computers"
        className={styles.img}
      />
      <h1>
        BEST <span>COMPUTERS</span>
      </h1>
      <div>
        <hr />
        {/* App component is passed into MainContainer as WrappedComponent */}
        <WrappedComponent />
      </div>
    </section>
  );
};

export default MainContainer;
