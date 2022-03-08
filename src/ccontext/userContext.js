import React from 'react';

export const UserContext = React.createContext();

export const useUserContext = () => {
    return React.useContext(UserContext);
};
