import React, { useState } from 'react';
import faker from 'faker';

import { FlagCard } from './components/FlagCard';
import { SearchBar } from './components/SearchBar';
import { Spinner } from './components/Spinner';

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
    setLoading(false);
  };

  const renderResults = () => {
    if (!results.length) return <p>No Results!</p>;
    return results.map(result => <FlagCard {...result} /> );
  };

  return (
    <div className="App">
      <SearchBar onChange={onSearchChange} />
      {
        loading
          ? <Spinner />
          : renderResults()
      }
    </div>
  );
}

