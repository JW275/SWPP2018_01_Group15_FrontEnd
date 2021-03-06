import React from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Card } from 'reactstrap'
import classnames from 'classnames'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { FutureEvents, PastEvents, CreateEvent } from 'components'
import { AttendanceStatistic } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class Events extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  componentDidMount() {
    this.props.onLoad(this.props.clubid)
  }

  render() {
    const clubid = this.props.clubid
    return [
      <Card body>
        <CreateEvent onPostEvent={this.props.onPostEvent} clubid={clubid} />
      </Card>,
      <br/>,
      <Card body>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
            onClick={() => { this.toggle('1') }}
          >
            다가오는 행사
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '2' })}
            onClick={() => { this.toggle('2') }}
          >
            지난 행사
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
            onClick={() => { this.toggle('3') }}
          >
            출석 통계
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={this.state.activeTab}>
        <TabPane tabId="1">
          <FutureEvents future_events={this.props.future_events} clubid={clubid} />
        </TabPane>
        <TabPane tabId="2">
          <PastEvents past_events={this.props.past_events} clubid={clubid} />
        </TabPane>
        <TabPane tabId="3">
          <br/>
          <AttendanceStatistic clubid={clubid} />
        </TabPane>
      </TabContent>
      </Card>
    ]
  }
}

export default Events
