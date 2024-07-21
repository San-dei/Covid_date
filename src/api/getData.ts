import { DateCovid } from "@/interface/main";


const getData = async (): Promise<DateCovid[]> => {
  const data = await fetch(
    "https://api.covidtracking.com/v1/states/daily.json"
  );
  const response = await data.json();
  return response;
};


export default getData;
