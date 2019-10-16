import React from 'react';
import Button from './button/Button';
import {connect} from 'react-redux';

const Form =({loacltime})=>{
    let options=[1,2,3,4,5,6,7,8];
    let btnVal=['查询','同步'];
    //获取form表单选择的要查询的数据
    let list={
        app:"trade",
        pagesize:"7",
        start:"2019-09-19",
        end:"2019-09-25"
    };
    //app选择
    let selected1=(e)=>{
        list.app=e.target.value
    };
    //psize选择
    let selected2=(e)=>{
        list.pagesize=e.target.value;
    };
    //开始日期
    let starttime=(e)=>{
        list.start=e.target.value;
    };
    //结束日期
    let endtime=(e)=>{
        list.end=e.target.value;
    };
    return (
        <div className="check flex">
            <div className="check-selected">
                <select onChange={selected1} defaultValue="trade">
                    <option value="trade">交易</option>
                    <option value="other">其他</option>
                </select>
            </div>
            <div className="check-selected">
                <select onChange={selected2} defaultValue="7">
                    {
                        options.map((item,key)=>{
                            return(
                                <option key={key} value={item}>{item}</option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="showdates" style={{fontSize:14}}>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日期选择</span>&nbsp;
                    <input type="date" id="user_date1" defaultValue="2019-09-19" onChange={starttime} /> -&nbsp;
                    <input type="date" id="user_date2"  defaultValue="2019-09-25" onChange={endtime}/>&nbsp;
                </div>
            <div>
                {
                    btnVal.map((item,key)=>{
                        return(
                            <Button key={key} value={item} list={list}/>
                        ) 
                    })
                }
            </div>
            <div style={{fontSize: 14}}>交易上次手动同步时间：<span>{loacltime}</span></div>
        </div>
    );
}

const mapStateToProps = (state) =>{//connect将store中的state绑定到该组件的props上
    console.log(state);
    return {
        loacltime:state.list.localtime
    }
}

//此处没有进行action操作
// const mapDispatchToProps = (dispatch) => {
//     return {
        
//     }
// };
export default connect(mapStateToProps,null)(Form);