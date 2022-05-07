import React from 'react';
import {useDispatch} from "react-redux";
import {addToBasket, decFromCart} from "../Redux/action";

const TableRow = ({el}) => {
    const dispatch = useDispatch()

    return (
            <tr className="basketFin2 " style={{background: "linear-gradient(268.51deg, #FF005C 0.86%, #000000 150.38%)"}}>
            <td className=" imgBasket   py-2  text-sm font-medium text-gray-900   dark:text-white">
                <img className="tableImg" src={el.img} alt=""/>
            </td>
                <td className="qer qerName    text-sm font-medium text-gray-900   dark:text-white">
                    <h3 className="nameWho ">
                        {el.name}
                    </h3>

                </td>
            <td   className="  py-4  text-sm  qerPrice  font-medium text-white  whitespace-nowrap dark:text-white">
                {el.price  * el.quantity}&nbsp;₺
            </td>
            <td className="py-4      text-sm font-medium text-white whitespace-nowrap dark:text-white">
                <button
                    onClick={() => {
                        dispatch(addToBasket(el))
                    }}
                    className="text-white plus dark:text-white mx-4 text-2xl ">+
                </button>
                {el.quantity}
                <button

                    onClick={() => dispatch(decFromCart(el.id))}
                    className="text-white plus dark:text-white mx-4 text-2xl ">-
                </button>
                <button
                    onClick={() => dispatch({type: "REMOVE_BASKET", payload: el.id})}
                    className="text-white  cres dark:text-white ">
                    <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.46458 15.5359L15.5356 8.46484" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                            <path d="M8.46458 8.46409L15.5356 15.5352" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>

                    </div>
                </button>

            </td>

        </tr>

    );
};

export default TableRow;