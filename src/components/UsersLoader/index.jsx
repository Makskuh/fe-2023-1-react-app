import React, { Component, useState, useEffect } from 'react';
import { getUsers } from '../../api';

function UsersLoader(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    load();
  }, [currentPage]);

  async function load() {
    setIsLoading(true);
    try {
      const resultUsers = await getUsers({
        page: currentPage,
        results: 10,
        nat: 'ua',
      });
      setUsers(resultUsers.results);
    } catch (error) {
      setisError(true);
    } finally {
      setIsLoading(false);
    }
  }
  const prev = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };
  const next = () => {
    setCurrentPage(currentPage + 1);
  };
  const userCards = users.map((user) => (
    <article key={user.login.uuid}>{JSON.stringify(user)}</article>
  ));
  const isThereUsers = users.length !== 0 && !isLoading;

  return (
    <div>
      <div>
        <button onClick={prev}>Previous page</button>
        <button onClick={next}>Next page</button>
      </div>
      {isError && <h1>Error happened</h1>}
      {isLoading && <h1>Loading users...</h1>}
      {isThereUsers ? userCards : <h1>Users not found</h1>}
    </div>
  );
}

export default UsersLoader;
