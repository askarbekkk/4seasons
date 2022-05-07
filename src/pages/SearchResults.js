import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {api} from "../http/api";

const SearchResults = () => {
    const [result, setResult] = useState([])
    const {search} = useParams()
    const basket = useSelector(s => s.basket)
    const basketItems = basket.some( basket => basket.id === result.id)
    console.log(basketItems , "aaaaaa")

    useEffect(() => {
        api(`/prod-list?name=${search}`)
            .then(({data}) => {
                try {
                    setResult(data)
                    console.log(setResult(data) , "SET")
                } catch (error) {
                    console.log(error)
                }
            })
    }, [])
    console.log(result, "res")
    const dispatch = useDispatch()

    // const addToBasket = (el) => {
    //     dispatch({type: "ADD_TO_BASKET", payload: el})
    // }

    return (
        <div className=" ">


        <div className=" SEARCH ">
            {
                result.map(el => (
                    <div className=" searchDiv">
                        <div style={{background: "#F8F8F8", margin: "0 5px"}} className="basket-card">
                            <Link to={`/details/${el.id}`}>
                                <img src={el.img} alt="Картинка"/>


                            <h1>{el.name}</h1>
                            <h1 style={{fontSize: "24px", color: "#FF005C"}}>{el.price} ₺</h1>
                            </Link>
                            <button onClick={() => dispatch({type: "ADD_TO_BASKET", payload:el.id})}
                                    style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}
                                    className="develop searchBtn">{
                                basketItems ? "Добавлено" : "В корзину"
                            }</button>
                        </div>
                    </div>
                ))
            }

        </div>
        </div>
    );
};

export default SearchResults;