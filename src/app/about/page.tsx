import ShowOrNo from "@/utils/ShowOrNo";
import styles from "../../styles/about.module.css";

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.paragraph}>
          Esta seccion de salud informativa busca un proposito al tratar de
          explicar de forma relativamente detallada de todos los datos a lo
          largo y ancho de USA consernientes al virus covid19.
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            date: Fecha en la que The COVID Tracking Project recopiló los datos,
            en formato YYYYMMDD.
          </li>
          <li className={styles.listItem}>
            state: Abreviatura de dos letras del estado o territorio <ShowOrNo/>
          </li>
          <li className={styles.listItem}>
            positive: Número total de casos confirmados y probables de COVID-19
            informados.
          </li>
          <li className={styles.listItem}>
            probableCases: Número total de casos probables de COVID-19; puede
            ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            negative: Número total de personas únicas con una prueba PCR
            negativa; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            pending: Número total de pruebas virales pendientes; puede ser null
            si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestResultsSource: Indica el campo utilizado para los
            resultados totales de la prueba (en este caso, totalTestsViral).
          </li>
          <li className={styles.listItem}>
            totalTestResults: Número total de resultados de pruebas virales
            (PCR) reportados.
          </li>
          <li className={styles.listItem}>
            hospitalizedCurrently: Número de personas actualmente hospitalizadas
            con COVID-19.
          </li>
          <li className={styles.listItem}>
            hospitalizedCumulative: Número total de personas que alguna vez han
            sido hospitalizadas con COVID-19.
          </li>
          <li className={styles.listItem}>
            inIcuCurrently: Número de personas actualmente en la Unidad de
            Cuidados Intensivos (UCI) con COVID-19; puede ser null si no hay
            datos.
          </li>
          <li className={styles.listItem}>
            inIcuCumulative: Número total de personas que alguna vez han sido
            hospitalizadas en la UCI con COVID-19; puede ser null si no hay
            datos.
          </li>
          <li className={styles.listItem}>
            onVentilatorCurrently: Número de personas actualmente con
            ventilación mecánica avanzada debido a COVID-19.
          </li>
          <li className={styles.listItem}>
            onVentilatorCumulative: Número total de personas que alguna vez
            estuvieron hospitalizadas bajo ventilación avanzada con COVID-19;
            puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            recovered: Número total de personas que se han identificado como
            recuperadas de COVID-19; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            lastUpdateEt: Fecha y hora (hora del Este) en la que el estado o
            territorio actualizó los datos por última vez.
          </li>
          <li className={styles.listItem}>
            dateModified: Fecha y hora en formato ISO en la que el estado o
            territorio actualizó los datos por última vez.
          </li>
          <li className={styles.listItem}>
            checkTimeEt: Hora del Este en la que se verificaron los datos.
          </li>
          <li className={styles.listItem}>
            death: Total de muertes con diagnóstico de caso confirmado o
            probable de COVID-19.
          </li>
          <li className={styles.listItem}>
            hospitalized: Número total de personas que alguna vez han sido
            hospitalizadas con COVID-19.
          </li>
          <li className={styles.listItem}>
            hospitalizedDischarged: Número total de pacientes con COVID-19 dados
            de alta del hospital; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            dateChecked: Fecha y hora en formato ISO en la que se verificaron
            los datos.
          </li>
          <li className={styles.listItem}>
            totalTestsViral: Número total de pruebas virales (PCR) completadas
            según lo informado por el estado o territorio.
          </li>
          <li className={styles.listItem}>
            positiveTestsViral: Número total de pruebas virales positivas según
            lo informado por el estado o territorio.
          </li>
          <li className={styles.listItem}>
            negativeTestsViral: Número total de pruebas virales negativas según
            lo informado por el estado o territorio.
          </li>
          <li className={styles.listItem}>
            positiveCasesViral: Número total de personas únicas con una prueba
            PCR positiva; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            deathConfirmed: Número total de muertes confirmadas por COVID-19;
            puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            deathProbable: Número total de muertes probables por COVID-19; puede
            ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestEncountersViral: Número total de personas a las que se les
            realizó la prueba de PCR por día; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestsPeopleViral: Número total de personas únicas que se
            sometieron al menos una vez a la prueba de PCR; puede ser null si no
            hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestsAntibody: Número total de pruebas de anticuerpos
            completadas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            positiveTestsAntibody: Número total de pruebas de anticuerpos
            positivas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            negativeTestsAntibody: Número total de pruebas de anticuerpos
            negativas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestsPeopleAntibody: Número total de personas únicas a quienes
            se les ha realizado al menos una prueba de anticuerpos; puede ser
            null si no hay datos.
          </li>
          <li className={styles.listItem}>
            positiveTestsPeopleAntibody: Número total de personas únicas con
            pruebas de anticuerpos positivas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            negativeTestsPeopleAntibody: Número total de personas únicas con
            pruebas de anticuerpos negativas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestsPeopleAntigen: Número total de personas únicas a quienes
            se les ha realizado al menos una prueba de antígeno; puede ser null
            si no hay datos.
          </li>
          <li className={styles.listItem}>
            positiveTestsPeopleAntigen: Número total de personas únicas con
            pruebas de antígeno positivas; puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            totalTestsAntigen: Número total de pruebas de antígeno completadas;
            puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            positiveTestsAntigen: Número total de pruebas de antígeno positivas;
            puede ser null si no hay datos.
          </li>
          <li className={styles.listItem}>
            fips: Código FIPS (Federal Information Processing Standards)
            estatal.
          </li>
          <li className={styles.listItem}>
            positiveIncrease: Incremento diario de casos positivos.
          </li>
          <li className={styles.listItem}>
            negativeIncrease: Incremento diario de casos negativos.
          </li>
          <li className={styles.listItem}>
            total: Número total de casos confirmados y probables de COVID-19.
          </li>
          <li className={styles.listItem}>
            totalTestResultsIncrease: Aumento diario del número total de
            resultados de pruebas.
          </li>
          <li className={styles.listItem}>
            posNeg: Obsoleto; suma de positivos y negativos.
          </li>
          <li className={styles.listItem}>
            dataQualityGrade: Grado de calidad de los datos reportados por el
            estado.
          </li>
          <li className={styles.listItem}>
            deathIncrease: Incremento diario de muertes.
          </li>
          <li className={styles.listItem}>
            hospitalizedIncrease: Incremento diario de hospitalizados.
          </li>
          <li className={styles.listItem}>
            hash: Hash del registro actual, usado para control de cambios.
          </li>
          <li className={styles.listItem}>
            commercialScore: Puntuación comercial; obsoleto.
          </li>
          <li className={styles.listItem}>
            negativeRegularScore: Puntuación regular negativa; obsoleto.
          </li>
          <li className={styles.listItem}>
            negativeScore: Puntuación negativa; obsoleto.
          </li>
          <li className={styles.listItem}>
            positiveScore: Puntuación positiva; obsoleto.
          </li>
          <li className={styles.listItem}>score: Puntuación; obsoleto.</li>
          <li className={styles.listItem}>grade: Grado; obsoleto.</li>
        </ul>
      </div>
    </>
  );
};

export default About;
