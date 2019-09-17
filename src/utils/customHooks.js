import {useEffect, useState} from "react";

//This file customHooks that can be used through the project


/**
 *
 * @param localStorageKey
 * @returns {*[]}
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