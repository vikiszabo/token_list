import {useEffect, useState} from "react";


export const useStateWithLocalStorage = localStorageKey => {

    const [tokens, setTokens] = useState(
        JSON.parse(localStorage.getItem(localStorageKey)) || []
    );

    useEffect(() => {
        if (localStorage.getItem(localStorageKey)) {
            localStorage.setItem(localStorageKey, JSON.stringify(tokens));
        } else {
            console.log("The data is missing.");
        }

    }, [tokens]);
    return [tokens, setTokens];
};