import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import styles from "../Calendar.module.css"



export default function EventModal() {
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(GlobalContext);

  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : "Without title"
  );
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : "Without description"
  );


  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      alert("Event updated!!!");
      dispatchCalEvent({ type: "update", payload: calendarEvent  });
    } 

    else {
      alert("Event pushed!!!");
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false);
  }
  return (
    <div className={styles.event_modal}>
      <form className={styles.form_event}>
        <header className={styles.header_even}>
          <div>
           
            <ion-icon  onClick={() => setShowEventModal(false)} name="close-outline"></ion-icon>
          </div>
          {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className={styles.span_delete_event}
              >
                DELETE <ion-icon name="trash-outline"></ion-icon> 
              </span>
            )}
        </header>
        <div className={styles.event_modal_contain2}>
          <div className={styles.event_modal_contain1}>
            <div></div>

            <input
              type="text"
              name="title"
              placeholder="Add title to event"
              value={title}
              required
              className={styles.event_input}
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className={styles.event_modal_span}> Date : {daySelected.format(" dddd DD MMM  ")}</span>
            <span className={styles.event_modal_span}>
              Details : 
            </span>
            <textarea
            className={styles.event_modal_description}
              name="description"
              placeholder="Add a description"
              value={description}
              required
             
              onChange={(e) => setDescription(e.target.value)}
            />
      
           
          </div>
        </div>
        <footer className={styles.event_footer}>
          <button
            type="submit"
            onClick={handleSubmit}
            className={styles.button_submit_event_modal}
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
