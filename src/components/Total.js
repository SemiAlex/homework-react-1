function Total ({products}) {
    return products.reduce((acc, product) => acc + product.price*product.count, 0).toFixed(2)
}

export default Total