import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from "../Calendar.module.css"

export default function CreateEventButton() {
  const { setShowEventModal } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className={styles.event_button}
    >
      <span> Create Event</span>
    </button>
  );
}
