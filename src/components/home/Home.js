import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../hero/Hero';

const Home = ({ movies }) => {
  return (
    <Hero movies={movies} />
  );
}
Home.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default Home;