import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-msg-es";
import { Navbar } from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch, useSelector } from "react-redux";
import { uiOpenModal } from "../../actions/ui";
import { eventSetActive } from "../../actions/event";
import { AddNewFab } from "../ui/AddNewFab";

moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  const [lastView, setView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const dispatch = useDispatch();
  // TODO: leer del store, los eventos
  const {events} = useSelector(state => state.calendar)

  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));

  };

  const onDobleclick = (e) => {
    dispatch(uiOpenModal());
  };

  const onView = (e) => {
    setView(e);
    localStorage.setItem("lastView", e);
  };

  const eventStyleGetter = (event, start, end, isSelected) => {
    // console.log(event,start,end, isSelected)
    const style = {
      backgroundColor: "#367CF7",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };

    return {
      style,
    };
  };

  return (
    
    <div className="calendar-screen">
      <Navbar />



        
      <Calendar
        eventPropGetter={eventStyleGetter}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onDoubleClickEvent={onDobleclick}
        onSelectEvent={onSelectEvent}
        messages={messages}
        onView={onView}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />
      <CalendarModal />
    </div>
  );
};
