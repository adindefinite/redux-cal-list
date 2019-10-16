import { CHECK, UPDATE } from "../../components/tab2/Action";



export default function calculator(state,action){
    if(!state){
        state={
            app:"trade",
            start:"2019-09-19",
            end:"2019-09-25",
            pageno:'1',
            pagesize:'7',
            localtime:'2019-09-25 10:39:34'
        }
    }
    switch(action.type){
        case CHECK:{//查询
            return {
                ...state,
                app:action.app,
                start:action.start,
                end:action.end,
                pageno:action.pageno,
                pagesize:action.pagesize
            };
        }
        case UPDATE:{//同步
            return {
                ...state,
                localtime:action.localtime
            };
        }
        default:
            return state;
    }
}