import React from 'react';
import Header from '../../components/Header';
import ToDo from 'components/ToDo';

function HomePage(page) {
  return <>
    <Header />
    <main>
      <ToDo />
    </main>
  </>;
}

export default HomePage;
