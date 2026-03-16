import type { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteElement = ({ element, loggedIn }: { element: ReactElement; loggedIn: boolean }) => {
  return loggedIn ? element : <Navigate to='/login' replace />;
};

export default ProtectedRouteElement;
