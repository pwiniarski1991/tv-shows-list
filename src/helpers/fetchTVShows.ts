const URL = 'http://api.tvmaze.com/search/shows?q';

export const fetchTVShows = async (tvmaze: string = '') => {
  try {
    const response = await fetch(`${URL}=${tvmaze}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('error: ', error);
    throw new Error(error);
  }
}