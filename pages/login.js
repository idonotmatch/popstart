import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';
import Header from '../components/header';
import Footer from '../components/footer';

const Login = () => {
  const { user, error } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Header />
      <div className="login-container">
        <h1>Welcome to Curious Trio</h1>
        <p>Please log in to access your personal list and more features</p>
        <a href="/api/auth/login" className="login-button">
          Log In with Auth0
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Login;