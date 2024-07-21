'use client'
import { useState } from "react";
import styles from "../styles/navbar.module.css";

const ShowOrNo = () => {
  const [isActive, setIsActive] = useState<boolean | string>(false);

  const handleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <button onClick={handleButton} className={styles.show}>Mostrar mas...</button>
      {isActive ? (
        <ul className={styles.subList}>
          <li className={styles.subListItem}>Alabama (AL)</li>
          <li className={styles.subListItem}>Alaska (AK)</li>
          <li className={styles.subListItem}>Arizona (AZ)</li>
          <li className={styles.subListItem}>Arkansas (AR)</li>
          <li className={styles.subListItem}>California (CA)</li>
          <li className={styles.subListItem}>Colorado (CO)</li>
          <li className={styles.subListItem}>Connecticut (CT)</li>
          <li className={styles.subListItem}>Delaware (DE)</li>
          <li className={styles.subListItem}>Florida (FL)</li>
          <li className={styles.subListItem}>Georgia (GA)</li>
          <li className={styles.subListItem}>Hawaii (HI)</li>
          <li className={styles.subListItem}>Idaho (ID)</li>
          <li className={styles.subListItem}>Illinois (IL)</li>
          <li className={styles.subListItem}>Indiana (IN)</li>
          <li className={styles.subListItem}>Iowa (IA)</li>
          <li className={styles.subListItem}>Kansas (KS)</li>
          <li className={styles.subListItem}>Kentucky (KY)</li>
          <li className={styles.subListItem}>Louisiana (LA)</li>
          <li className={styles.subListItem}>Maine (ME)</li>
          <li className={styles.subListItem}>Maryland (MD)</li>
          <li className={styles.subListItem}>Massachusetts (MA)</li>
          <li className={styles.subListItem}>Michigan (MI)</li>
          <li className={styles.subListItem}>Minnesota (MN)</li>
          <li className={styles.subListItem}>Mississippi (MS)</li>
          <li className={styles.subListItem}>Missouri (MO)</li>
          <li className={styles.subListItem}>Montana (MT)</li>
          <li className={styles.subListItem}>Nebraska (NE)</li>
          <li className={styles.subListItem}>Nevada (NV)</li>
          <li className={styles.subListItem}>New Hampshire (NH)</li>
          <li className={styles.subListItem}>New Jersey (NJ)</li>
          <li className={styles.subListItem}>New Mexico (NM)</li>
          <li className={styles.subListItem}>New York (NY)</li>
          <li className={styles.subListItem}>North Carolina (NC)</li>
          <li className={styles.subListItem}>North Dakota (ND)</li>
          <li className={styles.subListItem}>Ohio (OH)</li>
          <li className={styles.subListItem}>Oklahoma (OK)</li>
          <li className={styles.subListItem}>Oregon (OR)</li>
          <li className={styles.subListItem}>Pennsylvania (PA)</li>
          <li className={styles.subListItem}>Rhode Island (RI)</li>
          <li className={styles.subListItem}>South Carolina (SC)</li>
          <li className={styles.subListItem}>South Dakota (SD)</li>
          <li className={styles.subListItem}>Tennessee (TN)</li>
          <li className={styles.subListItem}>Texas (TX)</li>
          <li className={styles.subListItem}>Utah (UT)</li>
          <li className={styles.subListItem}>Vermont (VT)</li>
          <li className={styles.subListItem}>Virginia (VA)</li>
          <li className={styles.subListItem}>Washington (WA)</li>
          <li className={styles.subListItem}>West Virginia (WV)</li>
          <li className={styles.subListItem}>Wisconsin (WI)</li>
          <li className={styles.subListItem}>Wyoming (WY)</li>
          <li className={styles.subListItem}>District of Columbia (DC)</li>
          <li className={styles.subListItem}>American Samoa (AS)</li>
          <li className={styles.subListItem}>Guam (GU)</li>
          <li className={styles.subListItem}>Northern Mariana Islands (MP)</li>
          <li className={styles.subListItem}>Puerto Rico (PR)</li>
          <li className={styles.subListItem}>Virgin Islands (VI)</li>
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export default ShowOrNo;
