import { DateCovid } from "@/interface/main";
import Link from "next/link";

const getData = async (): Promise<DateCovid[]> => {
  const data = await fetch(
    "https://api.covidtracking.com/v1/states/daily.json"
  );
  const response = await data.json();
  return response;
};

const RenderApi = async () => {
  const render = await getData();
  return (
    <>
      {render.map((item, index) => (
        <div key={index}>
          <div>
            <Link href={`/More/${item.state.toLowerCase()}`}>
              <ul>
                <li>Estado:{item.state}</li>
                <li>Ultima actualizacion:{item.lastUpdateEt}</li>
                <li>Casos positivos:{item.positive}</li>
                <li>Muertes: {item.death}</li>
                <li>Hospitalizados actualmente:{item.hospitalizedCurrently}</li>
              </ul>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default RenderApi;
