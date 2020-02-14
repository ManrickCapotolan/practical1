import React, { useState } from 'react';

export function SearchBar(props) {
  const [email, setEmail] = useState('');
  const onChange = (e) => {
    props.onChange(e.target.value);
    setEmail(e.target.value);
  }

  return (
    <div>
      <label>Search By Email</label>
      <input type="text" value={email} onChange={onChange} />
    </div>
  );
};
