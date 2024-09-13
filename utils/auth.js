export const setReturnTo = (url) => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('returnTo', url);
    }
  };
  
  export const getReturnTo = () => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('returnTo');
    }
    return null;
  };
  
  export const clearReturnTo = () => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('returnTo');
    }
  };