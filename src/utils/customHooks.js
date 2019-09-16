import {useEffect, useState} from "react";


export const useStateWithLocalStorage = localStorageKey => {

    const [tokens, setTokens] = useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || []
    );

    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(tokens));
    }, [tokens, localStorageKey]);
    return [tokens, setTokens];
};