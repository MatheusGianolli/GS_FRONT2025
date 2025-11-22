import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './contexts/ThemeContext'; // Importar o Provider

const App: React.FC = () => {
  return (
    // CRITÉRIO: Uso do Context API no nível mais alto
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
