import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// App.tsx
import React from 'react';
import ResponsiveAppBar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/sidebar'
import BoardComponent from './components/sidebar/sidebar'

const App: React.FC = () => {
  return (
    <div>
      <BoardComponent userId='656b811ba83badbd99125a44'/>
    </div>
  );
};

export default App;
