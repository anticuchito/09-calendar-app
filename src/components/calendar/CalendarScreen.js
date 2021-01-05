import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { messages } from "../../helpers/calendar-msg-es";
import { Navbar } from "../ui/Navbar";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import { useDispatch } from "react-redux";
import { uiOpenModal } from "../../actions/ui";

moment.locale("es");

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "cumpleaños del jefe",
    start: moment().toDate(),
    end: moment().add(2, "hours").toDate(),
    bgColor: "#fafafa",
    notes: "Comprar el pastel",
    user: {
      _id: "123",
      name: "miguel",
    },
  },
];

export const CalendarScreen = () => {
  const [lastView, setView] = useState(
    localStorage.getItem("lastView") || "month"
  );
  const dispatch = useDispatch();
  const onSelect = (e) => {
    console.log(e);
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
        onSelectEvent={onSelect}
        messages={messages}
        onView={onView}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />

      <CalendarModal />
    </div>
  );
};
