import axios from 'axios';


export const searchComic = (title, publisher = 'marvel') => {
    return fetch(`comics/v1/query?title=${title}&publisher=${publisher}`)
    .then((response) => {
        return response.json();
    })
    .catch(exception => {
        console.log(exception);
    });
}

export const searchComicAxios = (title, publisher = 'marvel') => {
    return axios.get(`comics/v1/query?title=${title}&publisher=${publisher}`, { method: 'get', mode: 'no-cors', })
    .then(response => {
        const { data } = response;
        return data;
    })
    .catch(exception => {
        console.log(exception);
     });
}