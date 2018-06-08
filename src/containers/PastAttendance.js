import React from 'react'
import { connect } from 'react-redux'
import { PastAttendance } from 'components'
import { initEventState, initUserState, initClubState } from 'store/actions'

const PastAttendanceContainer = props => <PastAttendance {...props} />

const mapStateToProps = (state) => {
    return {
        eventState: state.event,
        clubState: state.club,
        userState: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoad: (eventid, clubid) => {
            dispatch(initEventState(eventid))
            dispatch(initUserState())
            dispatch(initClubState(clubid))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastAttendanceContainer)