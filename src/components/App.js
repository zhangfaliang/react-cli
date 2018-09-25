import React from 'react';
import { renderRoutes } from 'react-router-config';
import styles from './App.css';
const Root = ({ route }) => (
  <div>
    <h1 className={styles.App}>Root</h1>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
);
