import Logo from "../assets/react.svg";
import styles from "./components.module.css";

export const LayoutPage = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="logo" />
        <span>Header Page</span>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <img src={Logo} alt="logo" />
        <span>Footer Page</span>
      </footer>
    </>
  );
};
