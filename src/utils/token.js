const setToken = (token) => {
    window.localStorage.setItem("token", token);
}

const getToken = () => {
    return window.localStorage.getItem("token");
}

const delToken = () => {
    window.localStorage.removeItem("token");
}


export default {
    setToken,
    getToken,
    delToken,
}