import React from 'react';
import { UserDetail } from './UserDetail';

export function FlagCard(props) {
  const { email, jobTitle, avatar, content, countryCode } = props;
  return (
    <div className="fluid card">
      <UserDetail email={email} jobTitle={jobTitle} avatar={avatar} />
      <div className="extra content flag-content">
        <img className="left floated" src={`https://www.countryflags.io/${countryCode}/flat/64.png`} alt={countryCode}/>
        <p>{content}</p>
      </div>
    </div>
  )
}