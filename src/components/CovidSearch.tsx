'use client'
import { DateCovid } from "@/interface/main"
import { ChangeEvent, useEffect, useState } from "react"
import styles from "../styles/navbar.module.css"
import Link from "next/link"

const CovidSearch = () => {
  const [covidData, setCovidData] = useState<DateCovid[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')

  useEffect(() => {
    const fetchCovidData = async () => {
      const response = await fetch("https://api.covidtracking.com/v1/states/daily.json");
      const data = await response.json();
      setCovidData(data);
    };

    fetchCovidData();
  }, [searchTerm]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const comparation = searchTerm !== '' ? covidData.filter(item=> item.state.toUpperCase().includes(searchTerm.toUpperCase())) : ([])

  return (
    <>
    <div className={styles.conteiner}>
      <input type="text" placeholder="Search state..." value={searchTerm} onChange={handleSearchChange} className={styles.search}/>
      {searchTerm.length >0 &&
      <ul className={styles.search_ul}>
        {comparation.map((item, index) => (
          <Link href={`/More/${item.state.toLowerCase()}`} key={index} className={styles.search_link}>
          <li className={styles.search_li}>
            <div>State: {item.state}</div>
            <div>Hash: {item.hash}</div>
          </li>
          </Link>
        ))}
      </ul>}
      </div>
    </>
  )
}

export default CovidSearch
