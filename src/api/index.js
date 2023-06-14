import queryString from 'query-string';
import CONSTANTS from '../constants';

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
    results: CONSTANTS.RESULTS,
    seed: CONSTANTS.API_KEY,
    format: CONSTANTS.FORMAT,
    inc: CONSTANTS.DEFAULT_USER_DATA,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  const str = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  const response = fetch(`${CONSTANTS.BASE_URL}?${str}`).then((response) =>
    response.json()
  );

  return response;
};
