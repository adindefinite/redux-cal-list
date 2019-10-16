export const CHECK="check";//查询
export const UPDATE="update";//同步

const Check=(e)=>{
    return {
        type:'check',
        app:e.app,
        pagesize:e.pagesize,
        start:e.start,
        end:e.end 
    }
}

const Update=(e)=>{
    return {
        type:'update',
        app:e.app,
        pagesize:e.pagesize,
        start:e.start,
        end:e.end,
        localtime:'111'
    }
}

export {Check,Update};