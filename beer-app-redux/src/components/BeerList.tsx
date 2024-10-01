import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeers } from '../features/beerSlice';
import { RootState, AppDispatch } from '../store';

const BeerList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { beers, loading, error } = useSelector((state: RootState) => state.beers);

  useEffect(() => {
    dispatch(fetchBeers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Random Beer</h1>
      <ul>
        {beers.map((beer) => (
          <li key={beer.id}>
            <img src={beer.image_url} alt={beer.name} width={50} />
            <h2>{beer.name}</h2>
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BeerList;
