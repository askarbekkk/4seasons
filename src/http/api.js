import axios from "axios";


export const api = axios.create({
    baseURL:'https://api.tez-shop.com.kg/'
    // baseURL:'https://shoponlain.herokuapp.com/'
});


