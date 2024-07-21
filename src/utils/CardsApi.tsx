"use client";
import getData from "@/api/getData";
import { useEffect, useState } from "react";
import { DateCovid } from "@/interface/main";
import styles from "../styles/cards_api.module.css"
import LazyLoadCard from "./LazyLoadCard";

const CardsApi = () => {
  const [data, setData] = useState<DateCovid[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
    <div className={styles.cardContainer}>

      {data.map((item, index) => (
        <LazyLoadCard item={item} index={index} key={index} />
      ))}
      </div>
    </>
  );
};

export default CardsApi;
