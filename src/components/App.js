import React, { useState } from 'react';
import faker from 'faker';

import { FlagCard } from './FlagCard';
import { SearchBar } from './SearchBar';
import { Spinner } from './Spinner';

const fakeUsers = new Array(10).fill(null).map(_ => ({
    email: faker.internet.email(),
    jobTitle: faker.name.jobTitle(),
    avatar: faker.image.avatar(),
    content: faker.lorem.sentence(),
    countryCode: faker.address.countryCode(),
  })
);
console.log('FAKE USERS', fakeUsers);

export default function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearchChange = (value) => {
    setLoading(true);
    const filtered = fakeUsers.filter(user => value.length && user.email.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    setResults(filtered);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const renderResults = () => {
    if (!results.length) return <p>No Results!</p>;
    return (
      <div className="ui three column grid cards">
        { results.map(result => <FlagCard key={result.email} {...result} /> ) }
      </div>
    );
  };

  return (
    <div className="app ui container">
      <SearchBar onChange={onSearchChange} />
      {
        loading
          ? <Spinner />
          : renderResults()
      }
    </div>
  );
}

