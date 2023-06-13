export const getUsers = (currentPage) => {
  const response = fetch(
    `https://randomuser.me/api/?page=${currentPage}&results=10&seed=testSeed`
  ).then((response) => response.json());

  return response;
};
