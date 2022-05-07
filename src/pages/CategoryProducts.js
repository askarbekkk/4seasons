import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";
// import Card from "./Card";
import Loader from "../components/Loader";
import {addToBasket} from "../Redux/action";


const CategoryProducts = ({el}) => {
    const dispatch = useDispatch()
    const catalog = useSelector((state) => state.catalog)
    useEffect(() => {
        api("/category-list/")

            .then(({data}) => {
                dispatch({type: "UPLOAD_CATALOG", payload: data})
            })

    }, [])
//https://api.tez-shop.com.kg/prod-list/
    console.log(window.location.pathname.slice(-1))
    const query = window.location.pathname.slice(-1)
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [loading, setLoading] = useState(false)


    const basket = useSelector(s => s.basket)
    console.log(basket)

    const basketItems = basket.find(basket => basket.id === details.id)
    console.log(basketItems, "basketItems")
    const getAll = async () => {

        const url = await api("/prod-list")
        const {data} = await url
        const result = data.filter(el => el.category.id === +query)
        await setProducts(result);

    }

    useEffect(() => {
        getAll()

    }, [])

    console.log(products)
    console.log("proo", products.filter(el => {
        return el.category.id === +query
    }))
    const [details, setDetails] = useState([])


    return (
        <div className="container">


            {products.length === 0 ? (
                <div className="Loading2">
                    <div className="loading2 ">
                        <div className="lds-spinner">
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                            <div/>
                        </div>


                    </div>
                </div>

                ) :
                <div>

                    <div className="productBTN">


                        {
                            catalog.map(el => (
                                <Link to={`/categories/${el.id}`}>
                                    <button className="categoryBtn">{el.title}</button>
                                </Link>
                            ))
                        }


                    </div>
                    <div className="PRODUCT ">

                        {products.map(el => (
                            <div className="product" key={el.id}>
                                <div className=" productLink  ">
                                    <div className="terProduct">
                                        <Link class="" to={`/details/${el.id}`}>
                                            <img src={el.img} alt="no image" className="imgProduct "/>

                                            <div className="ml-2">
                                                <h1 className="text-lg nameProducts text-black">{el.name}</h1>
                                                <h1 style={{fontSize: "24px", color: "#FF005C"}}
                                                    className="text-base   mt-4">{el.price} ₺ </h1>
                                            </div>

                                            <button
                                                className="w-36 ert   h-9 rounded-md text-white text-lg mt-5">
                                                {
                                                    basketItems ? "Посмотрено " : "Посмотреть"
                                                }

                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>
            }
        </div>
    );
};

export default CategoryProducts;
