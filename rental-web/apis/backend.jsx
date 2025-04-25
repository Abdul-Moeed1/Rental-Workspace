import axios from "axios";

const api = axios.create({
    baseURL : "http://localhost:3000",
    withCredentials: true
});

export const createUser = (data) =>{
    return api.post("/signUp",data);
}

export const logIn = (data) =>{
    return api.post("/login",data);
}