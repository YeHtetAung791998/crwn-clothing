import React from "react";
import './menu-item.styles.scss';
import { useNavigate } from "react-router-dom"; // Import useNavigate

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className={`${size} menu-item`} onClick={() => navigate(linkUrl)}>
      <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className='content'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <span className='subtitle'>SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
