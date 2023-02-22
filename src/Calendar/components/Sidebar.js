import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import styles from "../Calendar.module.css"

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
<br></br>
<CreateEventButton/>
<SmallCalendar/>
    </aside>
  );
}
