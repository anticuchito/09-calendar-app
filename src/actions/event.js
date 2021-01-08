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