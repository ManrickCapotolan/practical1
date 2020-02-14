import React, { useState } from 'react';

export function SearchBar(props) {
  const [email, setEmail] = useState('');

  const onChange = (e) => {
    props.onChange(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div className="segment fluid ui">
      <h1 className='ui tiny header'>Search By Email</h1>
      <div className="ui fluid input">
        <input type="text" value={email} onChange={onChange} />
      </div>
    </div>
  );
};
