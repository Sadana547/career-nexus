import { createContext, useState, useEffect } from 'react';

// Create the Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in when the app loads
  useEffect(() => {
    const storedUser = localStorage.getItem('nexusUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // Login handler
  const login = (userData) => {
    localStorage.setItem('nexusUser', JSON.stringify(userData));
    setUser(userData);
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('nexusUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};