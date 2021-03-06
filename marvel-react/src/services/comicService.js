import axios from 'axios';


export const getComics = () => {
    return fetch("comics/v1/new")
    .then((response) => {
        return response.json();
    })
    .catch(exception => {
        console.log(exception);
    });
}

export const getComicsAxios = () => {
    return axios.get(`comics/v1/new`, { method: 'get', mode: 'no-cors', })
    .then(response => {
        const { data } = response;
        return data;
    })
    .catch(exception => {
        console.log(exception);
     });
}