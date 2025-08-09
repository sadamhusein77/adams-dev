import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import i18n from '@/i18n';
import { Loader } from '@/components/ui/loader';

const RequiredAuth = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const lang = localStorage.getItem('lang-id')?.toLowerCase() ?? 'id';
      i18n.changeLanguage(lang);

      const storedToken = localStorage.getItem('auth-token');

      if (storedToken) {
        setLoading(false);
        return;
      }

      // const query = new URLSearchParams(location.search);
      // const custParam = query.get('cust_param');

      // if (custParam) {
      //   try {
      //     const token = await Auth.getToken({publicKey: pubKey, callbackUrl: ''});
      //     if (token) {
      //       localStorage.setItem('auth-token', JSON.stringify(token));
      //       setLoading(false);
      //     } else {
      //       navigateWithPersistedQuery(loginRoute, { replace: true });
      //     }
      //   } catch (err) {
      //     console.error('Mobile auth failed:', err);
      //     navigateWithPersistedQuery(loginRoute, { replace: true });
      //   }
      // } else {
      //   navigateWithPersistedQuery(loginRoute, { replace: true });
      // }
    };

    checkAuth();
  // }, [navigateWithPersistedQuery, location]);
  }, [location]);

  if (loading) return <Loader />;

  return <Outlet />;
};

export { RequiredAuth };
