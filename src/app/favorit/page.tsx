"use client";
import useCovid from "@/store/store";
import Link from "next/link";
import styles from "../../styles/favorits.module.css";

const Favorit = () => {
  const favorits = useCovid((state) => state.favorits);
  const deleting = useCovid((state) => state.delete);

  console.log(favorits);
  return (
    <>
      {favorits.length > 0 ? (
        <div className={styles.favorits}>
          {favorits.map((item, index) => (
            <div key={index} className={styles.favorits_card}>
              <div className={styles.card_block}>
                <Link
                  href={`/More/${item.state.toLowerCase()}`}
                  className={styles.favorits_link}
                >
                  <ul className={styles.favorits_ul}>
                    <li className={styles.favorits_li}>Estado: {item.state}</li>
                    <li className={styles.favorits_li}>
                      Ultima actualizacion: {item.lastUpdateEt}
                    </li>
                    <li className={styles.favorits_li}>
                      Casos positivos: {item.positive}
                    </li>
                    <li className={styles.favorits_li}>
                      Muertes: {item.death}
                    </li>
                    <li className={styles.favorits_li}>
                      Hospitalizados actualmente: {item.hospitalizedCurrently}
                    </li>
                  </ul>
                </Link>

                <button onClick={() => deleting(item)} className={styles.buttonDelete}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.favorits_noCards}>
          <div>Aun no haz agregado cartas de informacion para mostrarlas</div>
        </div>
      )}
    </>
  );
};

export default Favorit;
