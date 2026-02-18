import { Navigate } from 'react-router-dom';
import { useAuth } from '../config/firebase';

export const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if(loading){
    return <h1> ...LOADING </h1>
  }

  if (!user) {
    console.log("LOG OUT");
    
    // Send them to login, but remember 'from' so you can redirect back later
    return <Navigate to="/login" replace />;
  }
    console.log("LOG IN");
  return children;
};