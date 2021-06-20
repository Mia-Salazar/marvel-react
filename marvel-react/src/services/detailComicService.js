import axios from 'axios';


export const getComicDetails = (id) => {
    return fetch(`comics/v1/diamond_id/${id}`)
    .then((response) => {
        return response.json();
    })
    .catch(exception => {
        console.log(exception);
    });
}

export const getComicsDetailsAxios = (id) => {
    return axios.get(`comics/v1/diamond_id/${id}`, { method: 'get', mode: 'no-cors', })
    .then(response => {
        const { data } = response;
        return data;
    })
    .catch(exception => {
        console.log(exception);
     });
}