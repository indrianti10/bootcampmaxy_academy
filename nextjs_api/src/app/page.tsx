import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Listdata from './components/listdata';


const Home = () => {
  return (
      <div>
          <Navbar />
          <main>
          <Hero />
          <Listdata/>
          </main>

      </div>
  );
};

export default Home;






