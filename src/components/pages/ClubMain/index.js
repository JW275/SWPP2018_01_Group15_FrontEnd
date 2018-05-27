import React from 'react'
import { Link } from 'react-router'

const ClubMain = ({ routeParams }) => {
  const club_id = routeParams.clubid
  return (
    <div>
      <Link to={`club/${club_id}/event`}> 동아리 이벤트 </Link><br/>
      <Link to={`club/${club_id}/manage`}> 동아리 관리 </Link><br/>
      <Link to={`club/${club_id}/account`}> 동아리 회계 관리 </Link><br/>     
    </div>
  )
}

export default ClubMain
