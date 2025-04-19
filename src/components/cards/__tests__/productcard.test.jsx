import React from "react";
import { describe, expect, test} from "vitest";
import { render, screen} from "@testing-library/react";
import ProductCard from "../productCard";
import "@testing-library/dom";

const product = {"id":1,"productName":"Collapsible Camping Cup","productDescription":"Space-saving cup that folds flat for easy storage.","productPrice":9.99,"productCategory":"Outdoor","productImgUrl":"http://dummyimage.com/1000x600.png/cc0000/ffffff","productColor":["Blue","Mauv"]}

describe('Card UI', () => {

    test('renders with no crash', () => {
       render(<ProductCard product={product} />)
       

    });

});