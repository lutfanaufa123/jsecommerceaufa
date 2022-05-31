import React from 'react'

// import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// below output is short form to import many items
import { Products, Navbar } from './components';

const App = () => {
  return (
    <div>
        <Navbar />
        <Products />
    </div>
  );
}

export default App