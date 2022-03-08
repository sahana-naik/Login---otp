export const LOCAL_STORAGE_AUTH_KEY = "LOCAL_STORAGE_AUTH_KEY";



export const getStoredData = (key) => {
    if(localStorage.getItem(key)) {
        // return window.atob(localStorage.getItem(key));
        return (localStorage.getItem(key));
    }
    else {
        return null;
    }
};


// export const storeData = (key, value) => {
//     localStorage.setItem(key, window.btoa(value));
//     // localStorage.setItem('isLoggedin', '1')
// }

export const storeData = (key, value) => {
    localStorage.setItem(key, value);
    // localStorage.setItem('isLoggedin', '1')
}


export const get_auth_key = () => {
    return window.btoa(LOCAL_STORAGE_AUTH_KEY);
}


export const deleteStoredData = (key) => {
    if(localStorage.getItem(key)) {
        localStorage.removeItem(key);
    }
    return true;
};
