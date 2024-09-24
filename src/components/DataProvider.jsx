import React, { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null);

    const dataLink = "https://robynainsley21.github.io/vue-data-eomp/data/"


    useEffect(() => {
        fetch(dataLink)
        .then((response) => response.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.error("Error fetching data: ", error))
    }, [])

    return(
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}