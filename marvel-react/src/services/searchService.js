import axios from 'axios';


export const searchComic = (title) => {
    return fetch(`v1/query?title=${title}&publisher=marvel`)
    .then((response) => {
        return response.json();
    })
    .catch(exception => {
        console.log(exception);
    });
}

export const searchComic = (title) => {
    return axios.get(`v1/query?title=${title}&publisher=marvel`, { method: 'get', mode: 'no-cors', })
    .then(response => {
        const { data } = response;
        return data;
    })
    .catch(exception => {
        console.log(exception);
     });
}