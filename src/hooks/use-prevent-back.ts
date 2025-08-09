import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const usePreventBack = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      navigate(location.pathname);
    };

    navigate(location.pathname);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [location.pathname]);
};

export default usePreventBack;
