import React from 'react';
import { renderRoutes } from 'react-router-config';

import 'normalize.css';
import { normalize } from 'normalize.css';

export default ({ route }) => (
  <div>
    <h1>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);
