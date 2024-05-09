import { PropsWithChildren } from "react";

import styles from "./banner.module.css";

// Props destructuring
const Banner = ({ children }: PropsWithChildren) => {
  const subtitleStyle = {
    fontStyle: "italic",
    fontSize: "x-large",
    color: "coral"
  };

  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./GloboLogo.png" alt="logo" className={styles.logo} height={150} />
      </div>
      {/** Style attribute is discouraged, keeping it for learning purposes only */}
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export { Banner };
