import { EventInfo, FutureAttendance, PastAttendance } from 'containers'
import React from 'react'

const EventDetailPage = ({ routeParams }) => {
  return (
    <div>
      <EventInfo eventid = {routeParams.eventid}/>
      <FutureAttendance eventid = {routeParams.eventid}/>
      <PastAttendance eventid = {routeParams.eventid} clubid = {routeParams.clubid} />
    </div>
  )
}

export default EventDetailPage
