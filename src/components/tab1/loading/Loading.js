import React from 'react';
import {connect} from 'react-redux';

const Loading=({Setdisplay})=>{
    let load=[1,2,3,4,5,6,7,8,9,10,11,12];
    return (
        <div className="loading" style={{display:Setdisplay?'block':'none'}}>
            {
                load.map((key)=>{
                    return <span key={key}></span>
                })
            }
        </div>
    )
}

//映射
const mapStateToProps = (state) =>{//connect将store中的state绑定到该组件的props上
    return {
        Setdisplay:state.calculators.display
    }
}
export default connect(mapStateToProps,null)(Loading);