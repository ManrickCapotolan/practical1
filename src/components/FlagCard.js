import React from 'react';
import { UserDetail } from './UserDetail';

export function FlagCard(props) {
  const { email, jobTitle, avatar, content, countryCode } = props;
  return (
    <div>
      <UserDetail email={email} jobTitle={jobTitle} avatar={avatar} />
      <p>{content}</p>
      <p>{countryCode}</p>
    </div>
  )
}