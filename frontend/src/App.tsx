import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// App.tsx
import React from 'react';
import ResponsiveAppBar from './components/navbar/Navbar';

const App: React.FC = () => {
  return (
    <div>
      <ResponsiveAppBar />
    </div>
  );
};

export default App;
