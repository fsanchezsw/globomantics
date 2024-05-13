import { PropsWithChildren, useContext } from "react";
import styles from "./banner.module.css";
import { NavigationValues, navigationContext } from "./app";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral"
};

// Props destructuring
const Banner = ({ children }: PropsWithChildren) => {
  const { navigate } = useContext(navigationContext);

  return (
    <header className="row mb-4">
      <div className="col-5">
        {/**
         * Non A11y complaint (Non-interactive elements shouldn't have event handlers),
         * but keeping it for learning purposes and to not overcomplicate the code
         */}
        <img
          src="./GloboLogo.png"
          alt="logo"
          className={styles.logo}
          height={150}
          onClick={() => navigate(NavigationValues.Home)}
        />
      </div>
      {/** Style attribute is discouraged, keeping it for learning purposes only */}
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export { Banner };
