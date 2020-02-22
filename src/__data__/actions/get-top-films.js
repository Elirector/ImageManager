import axios from 'axios'

import config from '../../app.config'

export default async ()=> {

    const result = await axios("/discover/movie?sort_by=popularity.desc", {
        method: 'GET',
        params: {
            api_key: config.api_key
        }
    });
    return result.data.results;
}