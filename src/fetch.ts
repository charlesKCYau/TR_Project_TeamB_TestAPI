import { createCipheriv } from "crypto";
import { Fetchparams } from "./type";
require('dotenv').config();

/**
 * Fetches data from themoviedb.org API endpoint and returns to the user
 *
 * @param URLExtension - the extension over the base API for example: /movie/550
 * @param URLparams array of url parameters to add to fetch request. For example [{param:Query, value:string}]
 * @returns Returns base object from the API parsed through response.json
 */
export const APIFetch = async (
  requestURL: string,
  URLparams?: Fetchparams[]
) => {
  const fetchURL = `${process.env.REACT_APP_BASE_URL}${requestURL}?api_key=${process.env.APIKEY}`;
  const queryParams = URLparams?.reduce(
    (acc, { param, value }: Fetchparams) => {
      acc += `&${param}=${value}`;
      return acc;
    },
    ""
  );

  const apiURL = queryParams ? fetchURL + encodeURI(queryParams) : fetchURL;
  const response = await fetch(apiURL);
  if (response.status === 200) {
    const results = await response.json();
    return results;
  } else if (response.status === 500) {
    return { error: "something went wrong!" };
  } else {
    return { error: response.statusText };
  }
};
