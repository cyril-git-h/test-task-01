import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export function getUsers() {
    return new Promise((resolve, reject) => {
        instance.get('/users')
            .then(res => resolve(res.data))
            .catch(err => reject(err));
    });
};

export function postUser(data:any) {
    return new Promise((resolve, reject) => {
        instance.post('/users', data)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};

export function deleteUser(id:any) {
    return new Promise((resolve, reject) => {
        instance.delete(`/users/${id}`)
            .then(res => resolve(res))
            .catch(err => reject(err));
    });
};
