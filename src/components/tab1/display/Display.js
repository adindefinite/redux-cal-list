import React from 'react';
import {connect} from 'react-redux'; 

//无状态组件
const Display=({value})=>{
    return(
        <div className="top flex">
            <p>{value}</p>
        </div>
    )
}

//映射
const mapStateToProps = (state) =>{//connect将store中的state绑定到该组件的props上
    return {
        value:state.calculators.value
    }
}
export default connect(mapStateToProps,null)(Display);