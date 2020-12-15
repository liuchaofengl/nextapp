import React,{useState} from 'react';
import dynamic from "next/dynamic"
const One = dynamic(import("../components/one"))
function Lazing(){
    const [times,SetTimes] =useState(Date.now())
   
    const changeTime = async () => {
      
        const moment = await import('moment')
        SetTimes(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>当前事件为{times}</div>
            <button onClick={changeTime}>改变时间格式</button>
            <One/>

        </>
    )
}
export default Lazing;