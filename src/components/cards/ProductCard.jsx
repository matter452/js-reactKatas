import React from "react";


export default function ProductCard({product}){
    console.log(product);
    let {id, productName, productDescription, productPrice, productImgUrl, productColor} = product;
    return (
    
    <div id={id} className="bg-slate-100 rounded-sm text-black p-8 min-h-xl min-w-1/2 md:max-w-sm">
        <h3>
            {productName}
        </h3>
        <img src={productImgUrl} />
        <p>${productPrice}</p>
        <p>{productDescription}</p>
        <p>{productColor.length} colors</p>
        {productColor.map(color => {
            let casedColor = color.toLowerCase();
            return (<div className={`size-4 bg-${casedColor}-500`}></div>)
        })}
    </div>
    )
}