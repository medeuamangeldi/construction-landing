import Image from "next/image";
import styles from "./spinner.module.scss";
const Spinner = () => {
  const imageLoader = () => {
    const imageUrl = "/icons/spinner.svg";
    return `${imageUrl}`;
  };
  return (
    <div className={styles.overlay}>
      <Image
        src="/icons/spinner.svg"
        loader={imageLoader}
        alt="icon"
        width={40}
        height={40}
        className={styles.spinner}
      />
    </div>
  );
};

export default Spinner;
