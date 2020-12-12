// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';

import { gql, useQuery } from '@apollo/client';

const GET_DOGS = gql`
  query GetDogs {
    dogs {
      id
      breed
    }
  }
`;

function Dogs({ onDogSelected }) {
    const { loading, error, data } = useQuery(GET_DOGS);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return (
      <select name="dog" onChange={onDogSelected}>
        {data.dogs.map(dog => (
          <option key={dog.id} value={dog.breed}>
            {dog.breed}
          </option>
        ))}
      </select>
    );
  }
  
export default Dogs;
