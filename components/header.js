import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useList } from '../context/ListContext';

const Header = () => {
  const { user, isLoading } = useUser();
  const { list } = useList();
  const count = list.items.length;

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
            <Link href="/list" className="my-list-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '6px'}}>
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              My List
              {count > 0 && <span className="list-badge">{count}</span>}
            </Link>
            {user ? (
              <a href="/api/auth/logout" className="auth-button logout">Logout</a>
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
