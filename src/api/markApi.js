import http from './axiosHttp';

const getAll = () => {
    return http.get("/marks");
}

const create = (data) => {
    return http.post("/marks", data);
}

const remove = id => {
    return http.delete(`/marks/${id}`);
}

const getAllCate = () => {
    return http.get("/categories");
}

const createCate = (data) => {
    return http.post("/categories", data);
}

export default {
    getAll,
    create,
    remove,
    getAllCate,
    createCate,
}