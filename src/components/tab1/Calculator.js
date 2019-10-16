import React from 'react';
import Loading from './loading/Loading';
import Ryg from './top/Ryg';
import Display from './display/Display';
import Keyboard from './main/Keyboard';

const Calculator=()=>{
    return (
        <div className="box flex">
            <Loading />
            <Ryg />
            <Display />
            <Keyboard />
        </div>
    );
}

export default Calculator;