import React from 'react';
import "./Product.css"

const products = [
    {
        name: "Iphone 14 Pro Max",
        price: 1200,
        id: 2,
        brand: "Apple",
        img: "https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Samsung Galaxy S23 Ultra",
        price: 1200,
        id: 3,
        brand: "Samsung",
        img: "https://images.samsung.com/is/image/samsung/p6pim/levant/sm-s918ezkgmea/gallery/levant-galaxy-s23-ultra-s918-412380-sm-s918ezkgmea-530489827?$720_576_PNG$"
    },
    {
        name: "Dyson V15 Detect Slim",
        price: 1800,
        id: 4,
        brand: "Dyson",
        img: "https://www.dyson.com/content/dam/dyson/images/products/primary/360367-01.png"
    },
    {
        name: "Iphone 17 Pro Max",
        price: 1200,
        id: 5,
        brand: "Apple",
        img: "https://www.apple.com/v/iphone-14-pro/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Macbook M5 Pro",
        price: 1200,
        id: 6,
        brand: "Apple",
        img: "https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
    {
        name: "Macbook M5 Air",
        price: 1200,
        id: 7,
        brand: "Apple",
        img: "https://www.apple.com/v/macbook-air/m/images/overview/hero/hero_static__e9b1jz0smqq_large.jpg"
    },
]

function Product() {
    const handleClick = (product) => {
        alert(`${product.name} | ${product.brand} | $${product.price}`)
    }

    return (
        <div className="products-grid">
            {products.map(product => (
                <div
                    key={product.id}
                    className="product-card"
                    onClick={() => handleClick(product)}
                >
                    <div className="product-img-wrapper">
                        <img src={product.img} alt={product.name} />
                    </div>
                    <div className="product-info">
                        <span className="product-brand">{product.brand}</span>
                        <h2 className="product-name">{product.name}</h2>
                        <p className="product-price">${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Product
