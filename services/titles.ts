import axios from 'axios';

import { Title } from '@interfaces/title.interface';

const apiKey = process.env.NEXT_PUBLIC_IMDB_API_KEY;
const client = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
});

const getTitles = (expression: string): Promise<Title[]> =>
  client.get(`/Search/${apiKey}/${expression}`).then((response) => {
    if (response.data.errorMessage) throw new Error(response.data.errorMessage);

    return response.data.results;
  });

const requests = {
  getTitles,
};

export default requests;
