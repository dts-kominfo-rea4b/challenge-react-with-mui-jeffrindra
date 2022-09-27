// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Call a Friend</h1>
      <span>
        <p className="tagline">Your friendly contact app</p>
      </span>
    </div>
  );
};

export default Header;
