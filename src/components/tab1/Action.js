export const LOAD="load";//加载loading
export const STOP="stop";//停止loading

//加载loading
const Load=()=>{
    return {
        type:LOAD,
        display:true
    }
}

//停止loading
const Stop=(v)=>{
    return {
        type:STOP,
        display:false,
        value:v
    }
}

//日常计算
const CalCul=(v)=>{
    return {
        type:v,
        value:v
    }
}
export {Load,Stop,CalCul};