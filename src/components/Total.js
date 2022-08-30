import { useEffect, useState } from "react"

function Total({ products }) {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setTotal(products.reduce((acc, product) => acc + product.price * product.count, 0))
    }, [products]);
    return <>
        <h5>Total: ${total.toFixed(2)}</h5>
    </>
}

export default Total