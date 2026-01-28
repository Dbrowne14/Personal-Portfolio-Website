import { useLocation, useNavigate } from "react-router-dom";

const flow = ["/", "/about", "/projects", "/contact"];

export const useStepNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = flow.indexOf(location.pathname);

  const next = () => {
    if (currentIndex < flow.length - 1) {
      navigate(flow[currentIndex + 1]);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      navigate(flow[currentIndex - 1]);
    }
  };

  return { next, prev };
};