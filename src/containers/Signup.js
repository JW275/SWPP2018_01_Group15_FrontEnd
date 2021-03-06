import React from 'react'
import { connect } from 'react-redux'
import { Signup } from 'components'
import { signup } from 'store/actions'

const SignupContainer = props => <Signup {...props} />

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSignup: (username, password, email, name, college, major, admission_year, onErr) => {
            dispatch(signup(username, password, email, name, college, major, admission_year, onErr))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)
