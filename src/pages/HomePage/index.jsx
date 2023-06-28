import React from 'react';
import Header from '../../components/Header';
import ToDo from 'components/ToDo';
import UsersLoader from 'components/UsersLoader';

function HomePage(page) {
  return <>
    <Header />
    <main>
      <UsersLoader />
    </main>
  </>;
}

export default HomePage;
