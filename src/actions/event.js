import { types } from "../types/types";

    
 export const eventAddNew = (eventCalendar) =>({
    type:types.eventAddNew,
    payload:eventCalendar,
 })

 export const eventSetActive = (eventCalendar) =>({
    type:types.eventSetActive,
    payload:eventCalendar,
 })
 export const eventClearActiveEvent =()=>({
   type:types.eventClearActiveEvent
 })
 export const eventUpdated = (eventCalendar) =>({
    type:types.eventUpdated,
    payload:eventCalendar
 });
 export const eventDeleted = () =>({
   type:types.eventDeleted
});