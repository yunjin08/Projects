import UserDisplay from "./components/UserDisplay";
import styles from "./style";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";

export default function App() {
  return (
    <div>
      <Toggle />
      <div className="bg-primary w-full overflow-hidden navbar-class">
        <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className="flex flex-1 mt-10 justify-center items-center w-full">
          <div className="w-full">
            <UserDisplay />
          </div>
        </div>
      </div>
    </div>
  );
}
