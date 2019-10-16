import React from 'react';
import Singlekey from './button/Singlekey';

const Keyboard=()=>{
    let keys=['AC','+/-','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
    return (
        <div className="main flex">
            {
                keys.map((item,key)=>{
                    return (
                        <Singlekey key={key} value={item}/>
                    )
                })
            }
        </div>
    )
}

export default Keyboard;