import queryString from 'query-string';

/**
 *
 * @param {object} [options]
 * @param {number} [options.page]
 * @param {number} [options.results]
 * @param {string} [options.seed]
 * @returns
 */
export const getUsers = (options = {}) => {
  // const { page, results, format, nat, seed, include } = options;

  const defaultOptions = {
    page: 1,
    results: 10,
    seed: 'testSeed',
    format: 'json',
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const str = queryString.stringify(finalOptions);

  const response = fetch(`https://randomuser.me/api/?${str}`).then((response) =>
    response.json()
  );

  return response;
};
