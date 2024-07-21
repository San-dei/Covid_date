'use client'
import { DateCovid } from "@/interface/main";
import styles from "../styles/more_information.module.css";
import useCovid from "@/store/store";

interface CardProps {
  data: DateCovid;
}

const MoreInformation = ({ data }: CardProps) => {
  const addFavorits = useCovid((state) => state.addFavorits)
  return (
    <div className={styles.moreContainer}>
      <div className={styles.moreCard}>
        <div className={styles.moreState}>
          <h2>{data.state}</h2>
        </div>

        <div className={styles.section}>
          <h3>Información General</h3>
          <p>Fecha: {data.date}</p>
          <p>
            Fuente de resultados de prueba totales:{" "}
            {data.totalTestResultsSource}
          </p>
          <p>FIPS: {data.fips}</p>
        </div>

        <div className={styles.section}>
          <h3>Casos y Pruebas</h3>
          <p>Casos positivos: {data.positive ?? "N/A"}</p>
          <p>Casos probables: {data.probableCases ?? "N/A"}</p>
          <p>Casos negativos: {data.negative ?? "N/A"}</p>
          <p>Casos pendientes: {data.pending ?? "N/A"}</p>
          <p>
            Resultados totales de la prueba: {data.totalTestResults ?? "N/A"}
          </p>
          <p>Total: {data.total}</p>
          <p>Pruebas totales virales: {data.totalTestsViral ?? "N/A"}</p>
          <p>Pruebas virales positivas: {data.positiveTestsViral ?? "N/A"}</p>
          <p>Pruebas virales negativas: {data.negativeTestsViral ?? "N/A"}</p>
          <p>Casos virales positivos: {data.positiveCasesViral ?? "N/A"}</p>
          <p>
            Pruebas totales de anticuerpos: {data.totalTestsAntibody ?? "N/A"}
          </p>
          <p>
            Pruebas positivas de anticuerpos:{" "}
            {data.positiveTestsAntibody ?? "N/A"}
          </p>
          <p>
            Pruebas negativas de anticuerpos:{" "}
            {data.negativeTestsAntibody ?? "N/A"}
          </p>
          <p>
            Pruebas totales de personas de anticuerpos:{" "}
            {data.totalTestsPeopleAntibody ?? "N/A"}
          </p>
          <p>
            Personas con pruebas positivas de anticuerpos:{" "}
            {data.positiveTestsPeopleAntibody ?? "N/A"}
          </p>
          <p>
            Personas con pruebas negativas de anticuerpos:{" "}
            {data.negativeTestsPeopleAntibody ?? "N/A"}
          </p>
          <p>
            Pruebas totales de personas de antígeno:{" "}
            {data.totalTestsPeopleAntigen ?? "N/A"}
          </p>
          <p>
            Personas con pruebas positivas de antígeno:{" "}
            {data.positiveTestsPeopleAntigen ?? "N/A"}
          </p>
          <p>Pruebas totales de antígeno: {data.totalTestsAntigen ?? "N/A"}</p>
          <p>
            Pruebas positivas de antígeno: {data.positiveTestsAntigen ?? "N/A"}
          </p>
        </div>

        <div className={styles.section}>
          <h3>Hospitalización y UCI</h3>
          <p>
            Hospitalizados actualmente: {data.hospitalizedCurrently ?? "N/A"}
          </p>
          <p>
            Hospitalizados acumulados: {data.hospitalizedCumulative ?? "N/A"}
          </p>
          <p>En UCI actualmente: {data.inIcuCurrently ?? "N/A"}</p>
          <p>En UCI acumulados: {data.inIcuCumulative ?? "N/A"}</p>
          <p>
            En ventilador actualmente: {data.onVentilatorCurrently ?? "N/A"}
          </p>
          <p>
            En ventilador acumulados: {data.onVentilatorCumulative ?? "N/A"}
          </p>
          <p>Recuperados: {data.recovered ?? "N/A"}</p>
          <p>Hospitalizados: {data.hospitalized ?? "N/A"}</p>
          <p>
            Hospitalizados dados de alta: {data.hospitalizedDischarged ?? "N/A"}
          </p>
        </div>

        <div className={styles.section}>
          <h3>Actualización y Verificación</h3>
          <p>Última actualización: {data.lastUpdateEt ?? "N/A"}</p>
          <p>Fecha modificada: {data.dateModified ?? "N/A"}</p>
          <p>Hora de verificación: {data.checkTimeEt ?? "N/A"}</p>
          <p>Fecha de verificación: {data.dateChecked ?? "N/A"}</p>
        </div>

        <div className={styles.section}>
          <h3>Fallecimientos</h3>
          <p>Fallecidos: {data.death ?? "N/A"}</p>
          <p>Fallecidos confirmados: {data.deathConfirmed ?? "N/A"}</p>
          <p>Fallecidos probables: {data.deathProbable ?? "N/A"}</p>
          <p>Aumento de fallecidos: {data.deathIncrease}</p>
        </div>

        <div className={styles.section}>
          <h3>Aumentos y Calidad de Datos</h3>
          <p>Aumento de positivos: {data.positiveIncrease}</p>
          <p>Aumento de negativos: {data.negativeIncrease}</p>
          <p>
            Aumento de resultados de prueba totales:{" "}
            {data.totalTestResultsIncrease}
          </p>
          <p>Positivos/Negativos: {data.posNeg}</p>
          <p>Calidad de los datos: {data.dataQualityGrade ?? "N/A"}</p>
        </div>

        <div className={styles.section}>
          <h3>Otros</h3>
          <p>Hash: {data.hash}</p>
          <p>Puntuación comercial: {data.commercialScore}</p>
          <p>Puntuación negativa regular: {data.negativeRegularScore}</p>
          <p>Puntuación negativa: {data.negativeScore}</p>
          <p>Puntuación positiva: {data.positiveScore}</p>
          <p>Puntuación: {data.score}</p>
          <p>Grado: {data.grade}</p>
        </div>

        <div className={styles.conteiner_more_add}>
        <button onClick={()=>addFavorits(data)} className={styles.more_add}>Agregar a favoritos</button>
        </div>
      </div>
    </div>
  );
};

export default MoreInformation;
