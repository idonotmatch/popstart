import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="page-container">
      <div className="content-wrapper">
        <main className="container">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;