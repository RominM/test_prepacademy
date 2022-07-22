import React from 'react';
import Cards from 'view/components/Cards';

const Movies = (props) => {
  const data = props.data;

  return (
    <div>
      <Cards data={data} />
    </div>
  );
};

export default Movies;
