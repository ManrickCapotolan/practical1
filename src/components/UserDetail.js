import React from 'react';

export function UserDetail(props) {
  const { email, jobTitle, avatar } = props;
  return (
    <div>
      <p>{ email }</p>
      <p>{ jobTitle }</p>
      <img src={avatar} alt={email} />
    </div>
  );
}