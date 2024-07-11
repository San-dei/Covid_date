const page = () => {
  return (
    <>
      <ul>
        <li>
          date: Fecha en la que The COVID Tracking Project recopiló los datos,
          en formato YYYYMMDD.
        </li>
        <li>
          state: Abreviatura de dos letras del estado o territorio (en este
          caso, AK para Alaska).
          <ul>
            <li>Alabama (AL)</li>
            <li>Alaska (AK)</li>
            <li>Arizona (AZ)</li>
            <li>Arkansas (AR)</li>
            <li>California (CA)</li>
            <li>Colorado (CO)</li>
            <li>Connecticut (CT)</li>
            <li>Delaware (DE)</li>
            <li>Florida (FL)</li>
            <li>Georgia (GA)</li>
            <li>Hawaii (HI)</li>
            <li>Idaho (ID)</li>
            <li>Illinois (IL)</li>
            <li>Indiana (IN)</li>
            <li>Iowa (IA)</li>
            <li>Kansas (KS)</li>
            <li>Kentucky (KY)</li>
            <li>Louisiana (LA)</li>
            <li>Maine (ME)</li>
            <li>Maryland (MD)</li>
            <li>Massachusetts (MA)</li>
            <li>Michigan (MI)</li>
            <li>Minnesota (MN)</li>
            <li>Mississippi (MS)</li>
            <li>Missouri (MO)</li>
            <li>Montana (MT)</li>
            <li>Nebraska (NE)</li>
            <li>Nevada (NV)</li>
            <li>New Hampshire (NH)</li>
            <li>New Jersey (NJ)</li>
            <li>New Mexico (NM)</li>
            <li>New York (NY)</li>
            <li>North Carolina (NC)</li>
            <li>North Dakota (ND)</li>
            <li>Ohio (OH)</li>
            <li>Oklahoma (OK)</li>
            <li>Oregon (OR)</li>
            <li>Pennsylvania (PA)</li>
            <li>Rhode Island (RI)</li>
            <li>South Carolina (SC)</li>
            <li>South Dakota (SD)</li>
            <li>Tennessee (TN)</li>
            <li>Texas (TX)</li>
            <li>Utah (UT)</li>
            <li>Vermont (VT)</li>
            <li>Virginia (VA)</li>
            <li>Washington (WA)</li>
            <li>West Virginia (WV)</li>
            <li>Wisconsin (WI)</li>
            <li>Wyoming (WY)</li>
            <li>District of Columbia (DC)</li>
            <li>American Samoa (AS)</li>
            <li>Guam (GU)</li>
            <li>Northern Mariana Islands (MP)</li>
            <li>Puerto Rico (PR)</li>
            <li>Virgin Islands (VI)</li>
          </ul>
        </li>
        <li>
          positive: Número total de casos confirmados y probables de COVID-19
          informados.
        </li>
        <li>
          probableCases: Número total de casos probables de COVID-19; puede ser
          null si no hay datos.
        </li>
        <li>
          negative: Número total de personas únicas con una prueba PCR negativa;
          puede ser null si no hay datos.
        </li>
        <li>
          pending: Número total de pruebas virales pendientes; puede ser null si
          no hay datos.
        </li>
        <li>
          totalTestResultsSource: Indica el campo utilizado para los resultados
          totales de la prueba (en este caso, totalTestsViral).
        </li>
        <li>
          totalTestResults: Número total de resultados de pruebas virales (PCR)
          reportados.
        </li>
        <li>
          hospitalizedCurrently: Número de personas actualmente hospitalizadas
          con COVID-19.
        </li>
        <li>
          hospitalizedCumulative: Número total de personas que alguna vez han
          sido hospitalizadas con COVID-19.
        </li>
        <li>
          inIcuCurrently: Número de personas actualmente en la Unidad de
          Cuidados Intensivos (UCI) con COVID-19; puede ser null si no hay
          datos.
        </li>
        <li>
          inIcuCumulative: Número total de personas que alguna vez han sido
          hospitalizadas en la UCI con COVID-19; puede ser null si no hay datos.
        </li>
        <li>
          onVentilatorCurrently: Número de personas actualmente con ventilación
          mecánica avanzada debido a COVID-19.
        </li>
        <li>
          onVentilatorCumulative: Número total de personas que alguna vez
          estuvieron hospitalizadas bajo ventilación avanzada con COVID-19;
          puede ser null si no hay datos.
        </li>
        <li>
          recovered: Número total de personas que se han identificado como
          recuperadas de COVID-19; puede ser null si no hay datos.
        </li>
        <li>
          lastUpdateEt: Fecha y hora (hora del Este) en la que el estado o
          territorio actualizó los datos por última vez.
        </li>
        <li>
          dateModified: Fecha y hora en formato ISO en la que el estado o
          territorio actualizó los datos por última vez.
        </li>
        <li>checkTimeEt: Hora del Este en la que se verificaron los datos.</li>
        <li>
          death: Total de muertes con diagnóstico de caso confirmado o probable
          de COVID-19.
        </li>
        <li>
          hospitalized: Número total de personas que alguna vez han sido
          hospitalizadas con COVID-19.
        </li>
        <li>
          hospitalizedDischarged: Número total de pacientes con COVID-19 dados
          de alta del hospital; puede ser null si no hay datos.
        </li>
        <li>
          dateChecked: Fecha y hora en formato ISO en la que se verificaron los
          datos.
        </li>
        <li>
          totalTestsViral: Número total de pruebas virales (PCR) completadas
          según lo informado por el estado o territorio.
        </li>
        <li>
          positiveTestsViral: Número total de pruebas virales positivas según lo
          informado por el estado o territorio.
        </li>
        <li>
          negativeTestsViral: Número total de pruebas virales negativas según lo
          informado por el estado o territorio.
        </li>
        <li>
          positiveCasesViral: Número total de personas únicas con una prueba PCR
          positiva; puede ser null si no hay datos.
        </li>
        <li>
          deathConfirmed: Número total de muertes confirmadas por COVID-19;
          puede ser null si no hay datos.
        </li>
        <li>
          deathProbable: Número total de muertes probables por COVID-19; puede
          ser null si no hay datos.
        </li>
        <li>
          totalTestEncountersViral: Número total de personas a las que se les
          realizó la prueba de PCR por día; puede ser null si no hay datos.
        </li>
        <li>
          totalTestsPeopleViral: Número total de personas únicas que se
          sometieron al menos una vez a la prueba de PCR; puede ser null si no
          hay datos.
        </li>
        <li>
          totalTestsAntibody: Número total de pruebas de anticuerpos
          completadas; puede ser null si no hay datos.
        </li>
        <li>
          positiveTestsAntibody: Número total de pruebas de anticuerpos
          positivas; puede ser null si no hay datos.
        </li>
        <li>
          negativeTestsAntibody: Número total de pruebas de anticuerpos
          negativas; puede ser null si no hay datos.
        </li>
        <li>
          totalTestsPeopleAntibody: Número total de personas únicas a quienes se
          les ha realizado al menos una prueba de anticuerpos; puede ser null si
          no hay datos.
        </li>
        <li>
          positiveTestsPeopleAntibody: Número total de personas únicas con
          pruebas de anticuerpos positivas; puede ser null si no hay datos.
        </li>
        <li>
          negativeTestsPeopleAntibody: Número total de personas únicas con
          pruebas de anticuerpos negativas; puede ser null si no hay datos.
        </li>
        <li>
          totalTestsPeopleAntigen: Número total de personas únicas a quienes se
          les ha realizado al menos una prueba de antígeno; puede ser null si no
          hay datos.
        </li>
        <li>
          positiveTestsPeopleAntigen: Número total de personas únicas con
          pruebas de antígeno positivas; puede ser null si no hay datos.
        </li>
        <li>
          totalTestsAntigen: Número total de pruebas de antígeno completadas;
          puede ser null si no hay datos.
        </li>
        <li>
          positiveTestsAntigen: Número total de pruebas de antígeno positivas;
          puede ser null si no hay datos.
        </li>
        <li>
          fips: Código FIPS (Federal Information Processing Standards) estatal.
        </li>
        <li>positiveIncrease: Incremento diario de casos positivos.</li>
        <li>negativeIncrease: Incremento diario de casos negativos.</li>
        <li>
          total: Número total de casos confirmados y probables de COVID-19.
        </li>
        <li>
          totalTestResultsIncrease: Aumento diario del número total de
          resultados de pruebas.
        </li>
        <li>posNeg: Obsoleto; suma de positivos y negativos.</li>
        <li>
          dataQualityGrade: Grado de calidad de los datos reportados por el
          estado.
        </li>
        <li>deathIncrease: Incremento diario de muertes.</li>
        <li>hospitalizedIncrease: Incremento diario de hospitalizados.</li>
        <li>hash: Hash del registro actual, usado para control de cambios.</li>
        <li>commercialScore: Puntuación comercial; obsoleto.</li>
        <li>negativeRegularScore: Puntuación regular negativa; obsoleto.</li>
        <li>negativeScore: Puntuación negativa; obsoleto.</li>
        <li>positiveScore: Puntuación positiva; obsoleto.</li>
        <li>score: Puntuación; obsoleto.</li>
        <li>grade: Grado; obsoleto.</li>
      </ul>
    </>
  );
};

export default page;
