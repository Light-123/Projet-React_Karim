import dayjs from "dayjs";
import styles from "../Calendar.module.css";
import GlobalContext from "../../context/GlobalContext";
import React, { useContext, useState, useEffect } from "react";


export default function Day({ day }) {

  const [dayEvents, setDayEvents] = useState([]);

 
  const {
    setDaySelected,
    setShowEventModal,
    filteredEvents,
    setSelectedEvent,
  } = useContext(GlobalContext);

  useEffect(() => {
    const events = filteredEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [filteredEvents, day]);

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? styles.current_date
      : "";
  }


  return (
    <div className={styles.day}>
     <header className={styles.day_header}>

          <p className={styles.day_text}>
            {day.format("ddd").toUpperCase()}
          </p>


        <p 
        className={getCurrentDayClass()}
        >
          {day.format("DD")}
        </p>
        
      </header>
      <div
        className={styles.day_content}
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      ><p className={styles.label_add_event} >"Add an event just above"</p>
        {dayEvents.map((evt, idx) => (
          <div className={styles.event_added}
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            >
            <h5>{evt.title}</h5>
          
          </div>
        ))}  
      </div>




      
    </div>
  );
}
