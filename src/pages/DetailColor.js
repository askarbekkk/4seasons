import React from 'react';

const DetailColor = ({el, onChangeValue}) => {
    return (
        <div
            className="stule_btn my-1 text-base flex items-center justify-center" >

            <label style={{
                border:"none",
             }} onChange="" key={el.id} htmlFor={`${el.id}`} className="stule mx-3"
            >
                <input   type="radio"
                       onChange={onChangeValue}
                       id={`${el.id}`} name="inputRadio" value={`${el.color_name}`}/>
                {el.color_name}
            </label>
        </div>
    );
};

export default DetailColor;