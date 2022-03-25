import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <Link to="/">Home</Link> <br/>
      <Link to="/lieder">Lieder</Link>
    </div>
  );
};
