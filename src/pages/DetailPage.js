import React from 'react';


const DetailPage = ({el, onChangeValue}) => {



    return (
     <li className="stule_btn my-1 text-base">
         <label onChange="" key={el.id} htmlFor={`${el.id}`} className="stule mx-3"
         >
             <input type="radio"
                    onChange={onChangeValue}
                    id={`${el.id}`} name="inputRadios" value={`${el.title}`}/>
             {el.title}
         </label>
     </li>
    );
};
export default DetailPage;