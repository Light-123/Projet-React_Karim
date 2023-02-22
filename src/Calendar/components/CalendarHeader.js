import dayjs from "dayjs";
import styles from "../Calendar.module.css";
import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
export default function CalendarHeader() {
  
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
    console.log("Index + 1 = "+monthIndex);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
    console.log("Index - 1 = "+monthIndex);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
    console.log("Index initial = "+monthIndex);
  }
  return (

    <header className={styles.header_calendar}>
         
      <ion-icon onClick={handlePrevMonth} name="chevron-back-outline"></ion-icon>

        <h2 className={styles.header_today} onClick={handleReset}>Today</h2>
      <ion-icon onClick={handleNextMonth} name="chevron-forward-outline"></ion-icon>
      <h2 className={styles.header_month}>
        {dayjs(new Date(dayjs().year(), monthIndex)).format(
          "MMMM YYYY"
        )}
      </h2>
    </header>

    
  );
}
