import React from 'react';

export function UserDetail(props) {
  const { email, jobTitle, avatar } = props;
  return (
    <div className="content">
      <img className="right floated mini ui image" src={avatar} alt={email} />
      <div className="left floated ui small header">{ email }</div>
      <div className="left floated meta">{ jobTitle }</div>
    </div>
  );
}