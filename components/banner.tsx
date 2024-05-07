import Image from "next/image";
import logoImg from "@/public/GloboLogo.png";
import styles from "./banner.module.css";

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "coral"
};

const Banner = () => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        {/** NextJS image component to improve performance with automatic Image Optimization */}
        <Image src={logoImg} alt="logo" height={150} className={styles.logo} />
      </div>
      {/** Style attribute is discouraged, keeping it for learning purposes only */}
      <div className="col-7 mt-5" style={subtitleStyle}>
        Providing houses all over the world
      </div>
    </header>
  );
};

export default Banner;
