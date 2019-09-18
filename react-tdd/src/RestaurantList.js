import React from 'react';
import { dataURLToBlob } from 'blob-util';

const RestaurantList = ({ restaurants }) => (
  <ul>
    {
      restaurants.map(restaurantNames => (
        <li key={restaurantNames}>{restaurantNames}</li>
      ))
    }
  </ul>
);

export default RestaurantList;
