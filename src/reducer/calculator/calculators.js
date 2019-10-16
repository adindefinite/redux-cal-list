import {LOAD,STOP} from '../../components/tab1/Action'

const RESIT="AC";//重置
const PM="+/-";//正负
const PERCENT="%";//百分号
const DIVISION="/";//除法
const MULTI="*";//乘法
const LESS="-";//减法
const ADD="+";//加法
const EQUAL="=";//等号
const POINT=".";//小数点


let caltype=false;//是否进行过计算

//等号计算
const Equal=(v,cal)=>{
    let Eqvalue=v;
    if(!endStrType(v)){//若计算过程中最后一位字符不是运算符，则进行计算
        Eqvalue=eval(v);
        cal=true;
    }
    return {Eqvalue,cal};
}

export default function calculator(state,action){
    if(!state){
        state={
            value:0,
            display:false//loading动画的显示消失
        }
    }
    switch(action.type){
        case RESIT:{//重置
            caltype=false;
            return {
                ...state,//防止覆盖其他reducers函数返回的state
                value:0
            };
        }
        case PM:{//正负
            //最后一位数是运算符或者小数点或者输出框中为0都不可以进行操作
            if(!endStrType(state.value) && state.value!==0){
                if(IsNaN(state.value)){//纯数字、浮点数
                    caltype=false;
                    return {
                        ...state,
                        value:-state.value
                    }
                }
                caltype=false;
            }
            return state;
        }
        case PERCENT:{//%
            let PValue=state.value;
            if(!endStrType(state.value) && state.value!==0){
                PValue+="%";
                caltype=false;
            }
            return {
                ...state,
                value:PValue
            };
        }
        case DIVISION:{//除法
            let DValue=state.value;
            if(!endStrType(state.value) && state.value!==0){
                DValue+="/";
                caltype=false;
            }
            return {
                ...state,
                value:DValue
            };
        }
        case MULTI:{//乘法
            let MValue=state.value;
            if(!endStrType(state.value) && state.value!==0){
                MValue+="*";
                caltype=false;
            }
            return {
                ...state,
                value:MValue
            };
        }
        case LESS:{//减法
            let LValue=state.value;
            if(!endStrType(state.value) && state.value!==0){
                LValue+="-";
                caltype=false;
            }
            return {
                ...state,
                value:LValue
            };
        }
        case ADD:{//加法
            let AValue=state.value;
            if(!endStrType(state.value) && state.value!==0){
                AValue+="+";
                caltype=false;
            }
            return {
                ...state,
                value:AValue
            };
        }
        case EQUAL:{//等号
            let EValue=Equal(state.value,caltype).Eqvalue;
            caltype=Equal(state.value,caltype).cal;
            return {
                ...state,
                value:EValue
            }
        }
        case POINT:{//小数点
            let PValue=state.value;
            if(!endStrType(state.value)){//最后一位数为数字
                if(!IsNaN(state.value)){//如果输出框中不是纯数字
                    let endstr=state.value.match(/(\d+)[^0-9]*$/)[1];//截取字符串最后一组数
                    let end2str=state.value.substr(state.value.length-endstr.length-1,1);//截取字符串最后一位数字以上的倒数第二位
                    if(end2str==="."){//如果字符串最后一组数的前一个字符是小数点，则不能加上小数点
                        return state;
                    }
                }else if((state.value+"").indexOf('.')!==-1){//若计算过程中是浮点数，则不能再加上小数点
                    return state;
                } 
                PValue+=".";
                caltype=false;
            }
            return {
                ...state,
                value:PValue
            };
        }
        case LOAD:{
            return {
                ...state,
                display:true
            };
        }
        case STOP:{
            let EValue=Equal(state.value,caltype).Eqvalue;
            caltype=Equal(state.value,caltype).cal;
            return {
                display:false,
                value:EValue
            };
        }
        default:{//选择数字部分
            //计算前先初始化-AC
            //当输出框中为0
            let NumValue=state.value;
            if(typeof(action.value)==="undefined"){//当没有传参时，初始化设置value为0
                NumValue=0;
            }
            else if(state.value===0){
                NumValue=action.value;
            }else{
                if(caltype){//如果已经进行过计算
                    NumValue=action.value;
                    caltype=false;
                }else{
                    NumValue+=action.value;
                }
            }
            return {
                ...state,
                value:NumValue
            };
        }
    }
}

//判断当前输出框中的是否是数字
const IsNaN=(str)=>{
    let regPos = /^\d+(\.\d+)?$/; //非负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(str) || regNeg.test(str)){
        return true;//纯数字
    }else{
        return false;//包含运算符
    }
}

//判断字符串最后一位是否是运算符，true运算符或小数点,false纯数字
const endStrType =(str)=>{
    if(IsNaN(str)){
        return false;
    }
    let endstr=str.substr(str.length-1,1);
    if(!IsNaN(endstr)){//若最后一位为运算符
        return true;
    }else{
        return false;
    }
}