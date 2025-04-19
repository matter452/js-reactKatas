import React from "react";
import ProductCard from "./productCard.jsx";

export default function ProductGrid({ products }){

    return(
    <div id="prodcutGrid" className="grid grid-cols-2b content-center md:grid-cols-3 gap-4">
        {
        
        products.map((product) => {
            
            return <ProductCard product={product} />
        })
        }
    </div>
    )
}