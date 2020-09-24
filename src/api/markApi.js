import http from './axiosHttp';

const getAll = () => {
    return http.get("/mark");
}

const create = (data) => {
    return http.post("/mark", data);
}

const remove = id => {
    return http.delete(`/mark/${id}`);
}

const getAllCate = () => {
    return http.get("/categories");
}

export default {
    getAll,
    create,
    remove,
    getAllCate
}