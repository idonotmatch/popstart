import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { getReturnTo, clearReturnTo } from '../../../utils/auth';

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        afterCallback: (req, res, session, state) => {
          const returnTo = getReturnTo();
          clearReturnTo();
          if (returnTo) {
            res.setHeader('Location', returnTo);
          }
          return session;
        },
      });
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },
});