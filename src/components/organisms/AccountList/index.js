import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Link } from 'react-router'
import { Load } from 'components'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountList = ({ clubState={ accounts: [], needLoading: true }, onLoad, clubid}) => {
  if(clubState.needLoading){
    const onLoading= () => {
      onLoad(clubid)
    }
  
    return (
      <Wrapper>
        <Load onLoad = {onLoading} /> 
      </Wrapper>
    )
  }
  console.log(clubState.accounts)

  return (
    <Wrapper> 
      전체 회계 정보 <br /> 
      <ul>
        {clubState.accounts.map((account,i) => 
          <li key={i}>
            <strong>{account.is_income ===  "income" ? `수입` : `지출` } </strong> <br/> 
            금액: {account.money} <br/>
            {/* 작성자: {account.writer} <br/> */}
            내용: {account.content} <br/>
            날짜: {account.date} <br/>
            {/* 작성일: {account.created_at} <br/>
            수정일: {account.updated_at} <br/> */}
            account id = {`${account.id}`}
            <Link to={`/account/${account.id}/`}> 상세보기 </Link> 
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

AccountList.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountList
