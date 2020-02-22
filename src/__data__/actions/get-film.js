import axios from 'axios'

import config from '../../app.config'

export default async (id)=> {
    const result = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
        method: 'GET',
        params: {
            api_key: config.api_key
        }
    });
    return result.data.results;
}