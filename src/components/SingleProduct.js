import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom"

function SingleProduct() {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({})
    const products = useOutletContext();

    useEffect(() => {
        if (products?.length) {
            setSingleProduct(products.filter(el => el.id === +productId)[0]);
            window.scroll({
                top: 0,
                behavior: 'smooth'
            })
        }
        console.log(singleProduct)
    }, [products, productId])

    return <h1>{singleProduct.brand} {singleProduct.model}, price: ${singleProduct.price}</h1>
}

export default SingleProduct