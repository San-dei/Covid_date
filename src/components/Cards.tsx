import { DateCovid } from "@/interface/main";
import useCovid from "@/store/store";
import Link from "next/link";
import styles from "../styles/cards.module.css";

interface Props {
  item: DateCovid;
  index: number;
}

const Cards = ({ item, index }: Props) => {
  const addFavorit = useCovid((state) => state.addFavorits);

  return (
    <>
      <div key={index} className={styles.card}>
        <div className={styles.card_block}>
          <Link
            href={`/More/${item.state.toLowerCase()}`}
            className={styles.link}
          >
            <ul className={styles.ul}>
              <li className={styles.li}>Estado: {item.state}</li>
              <li className={styles.li}>
                Ultima actualizacion: {item.lastUpdateEt}
              </li>
              <li className={styles.li}>Casos positivos: {item.positive}</li>
              <li className={styles.li}>Muertes: {item.death}</li>
              <li className={styles.li}>
                Hospitalizados actualmente: {item.hospitalizedCurrently}
              </li>
            </ul>
          </Link>
          <div className={styles.button_container}>
            <button onClick={() => addFavorit(item)} className={styles.button}>
              A favoritos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
