import React, { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import './Home.css'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchedData = async () => {
            const fetchedData = await fetch('https://fakestoreapi.com/products')
            const result = await fetchedData.json()
            setData(result)
        }
        fetchedData()
    }, [])

    return (
        <>
            <Header name='Home' />
            <span className="container">
                {
                    data && data.map((product, index) => (
                        <div className="product-card" key={index}>
                            <img className="product-image" src={product.image} alt={product.title} />
                            <h5>{product.title}</h5>
                            <div><span><b>Price:</b> {product.price}$ </span> <span><b>Rating:</b> {product.rating.rate} <span style={{"color": "yellow"}}>&#9733;</span></span></div>
                            <div>{product.description}</div>
                        </div>
                    ))
                }
            </span>
            <Footer />
        </>
    )
}

export default Home