import React from 'react';
import { useLocation } from 'react-router-dom';
import './MyWishlist.css';

const MyWishlist = () => {
  const location = useLocation();
  const data = location.state;

  if (!data) return <p>No wishlist data available.</p>;

  return (
    <div className="mywishlist-container">
      <h2>My Wishlist</h2>
      <ul>
        <li><strong>From:</strong> {data.from}</li>
        <li><strong>To:</strong> {data.to}</li>
        <li><strong>Hotel:</strong> {data.hotel}</li>
        <li><strong>Travelling From:</strong> {data.travellingfrom}</li>
      </ul>
    </div>
  );
};

export default MyWishlist;
