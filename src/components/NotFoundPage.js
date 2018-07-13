import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>  {/* Link - client side routing with js */}
  </div>
);

export default NotFoundPage;