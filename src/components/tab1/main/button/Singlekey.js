import React from 'react';
import {connect} from 'react-redux';
import { Load, Stop, CalCul } from '../../Action';

const Singlekey=({handleOnClick,value})=>{
    return(
        <div onClick={handleOnClick}>
            {value}
        </div>
    )
}
//此处好像没用到?
const mapStateToProps = (state) =>{//connect将store中的state绑定到该组件的props上
    return {
        values:state.calculators.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //点击事件修改state
        handleOnClick(e){
            //e.target.innerHTML获取的是选中的按钮选项
            let click=e.target.innerHTML;
            if(click==="="){
                dispatch(Load());
                //dispatch({type:'load',display:true});//dispatch派发action
                setTimeout(()=>{//显示loading，持续1.5s后消失
                    dispatch(Stop(click));
                    //dispatch({type:'stop',display:false});
                    //dispatch({type:click,value:click});//dispatch派发action
                },1500);
            }else{
                dispatch(CalCul(click));//dispatch派发action
            }
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Singlekey);