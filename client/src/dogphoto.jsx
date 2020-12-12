// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import ReactDOM from 'react-dom';
import { useQuery, gql } from '@apollo/client';
import Dogs from './dogs.jsx';

const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayImage
    }
  }
`;

function DogPhoto({ breed }) {
  const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
    variables: { breed },
  });

  if (loading) return null;
  if (error) return `Error! ${error}`;

  return (
    <div>
        <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
        <button onClick={() => refetch()}>Refetch!</button>
    </div>
  );
}

export default DogPhoto;
