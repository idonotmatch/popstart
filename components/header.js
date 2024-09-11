import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';

const Header = () => {
  const { user, isLoading } = useUser();

  return (
    <header className="global-header">
      <div className="logo">
        <Link href="/">
          <img src="/images/trio.png" alt="Curious Trio logo" />
        </Link>
      </div>
      <nav className="auth-nav">
        {!isLoading && (
          <>
            <Link href="/list" className="my-list-button">My List</Link>
            {user ? (
              <div className="user-info">
                <span>Welcome, {user.name}!</span>
                <a href="/api/auth/logout" className="auth-button logout">Logout</a>
              </div>
            ) : (
              <a href="/api/auth/login" className="auth-button login">Login</a>
            )}
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;