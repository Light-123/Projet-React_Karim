import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "../util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import styles from "./Calendar.module.css"
import EventModal from "./components/EventModal";
import GlobalContext from "../context/GlobalContext";



function App() {

const [currentMonth, setCurrentMonth] = useState(getMonth());
const { monthIndex, showEventModal } = useContext(GlobalContext);

useEffect(() => {
  setCurrentMonth(getMonth(monthIndex));
}, [monthIndex]);

  return (
    <React.Fragment>
{showEventModal && <EventModal />}

      <div >
        <h1 className={styles.title}>CALENDAR</h1>
        <CalendarHeader/>
        <div className={styles.single_day}>
          <Sidebar/>
          <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
