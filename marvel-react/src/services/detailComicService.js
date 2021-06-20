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

export const getComicsDetailsAxios = () => {
    return axios.get(`comics/v1/diamond_id/`, { method: 'get', mode: 'no-cors', })
    .then(response => {
        console.log('ghgj')
        const { data } = response;
        return data;
    })
    .catch(exception => {
        console.log(exception);
     });
}