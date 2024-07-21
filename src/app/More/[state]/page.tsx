import More_information from "@/components/More_information";

interface Props{
  params:{
    state:string,
  }
}

const dinamicData = async (state:string) => {
  try{
    const data = await fetch(`https://api.covidtracking.com/v1/states/${state.toLowerCase()}/current.json`);
    const resp = await data.json();
    console.log(resp)
    return resp
  }catch(error){
    console.log(error)
  }
}

const Page = async ({params}:Props) =>{
  const {state} = params;
  const showResult =await dinamicData(state);

  return <>
    <More_information data={showResult}/>
  </>
}

export default Page;