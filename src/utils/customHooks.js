import {useEffect, useState} from "react";

/**
 * This fill will store the custom hooks planned
 * to handle state management and local storage maintenance
 */


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