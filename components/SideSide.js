import styles from "./SideSide.module.css";
import pic1 from "../images/66473975.jpg";
import Image from "next/image";

const SideSide = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.descriptioncontainer}>
          <h2 className={styles.h2}>Food Material</h2>
          <p className={styles.p}>
            qwsedfgbbnm,.dfgbnhjklsdfgbnbjkl;sdfgvbn bnkl;sdfgvbn nm,.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideSide;
{
  /* <div className={styles.imagecontainer}>
          <Image
            src="/images/66473975.jpg"
            alt="Example image"
            width={300}
            height={200}
          />
        </div> */
}
