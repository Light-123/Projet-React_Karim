import React from "react";
import Day from "./Day";
import styles from "../Calendar.module.css"
export default function Month({ month }) {
  return (
    <div className= {styles.calendar_body}>
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
