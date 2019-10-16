import React from 'react';
import {connect} from 'react-redux';
import { Check, Update } from '../../Action';

const Button=({handleOnClick,value,list})=>{
    return(
        <button className="button" onClick={()=>handleOnClick(value,list)}>
            {value}
        </button>
    )
}

//action
const mapDispatchToProps = (dispatch) => {
    return {
        //点击事件修改state
        handleOnClick(value,e){
            if(value==="查询"){
                dispatch(Check(e));//dispatch派发action
            }
            if(value==="同步"){
                dispatch(Update(e));//dispatch派发action
            }
        }
    }
};
export default connect(null,mapDispatchToProps)(Button);