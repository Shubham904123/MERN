import { createContext, useEffect, useState } from "react";

export const productContext = createContext({})

export const ProductProvider = ({children}) => {
    const [data, setData] = useState([])


    const getProduct = () =>{
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) =>setData(data));
    }
    useEffect(() => {
    getProduct()
    }, [] )
   



    return(

        <productContext.Provider value={{data}} >{children}</productContext.Provider>

    );
}
