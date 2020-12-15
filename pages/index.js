import React from 'react'
import Link from "next/Link"
import Router from "next/router"

const Home =  () => {

  const gopush = () => {
      Router.push({
        pathname:"/xiaojiejie",
        query:{name:'安斋拉拉'}
      })
  }
      //路由钩子事件
   Router.events.on('routeChangeStart',(...arg)=>{
     console.log('1.routeChangeStart开始改变-----:',...arg)
   })
   Router.events.on('routeChangeComplete',(...arg) => {
     console.log('2.routeChangeComplete',...arg)
   })
   Router.events.on('beforeHistoryChange',(...arg) => {
     console.log('3.beforeHistoryChange',...arg)
   })
   Router.events.on('hashChangeStart',(...arg)=>{
     console.log('hashChangeStart',...arg)
   })
   Router.events.on('hashChangeComplete',(...arg)=>{
     console.log('hashChangeComplete',...arg)
   })
    
 

    return (
      <>
         <div>我是首页</div>
        <Link href="/xiaojiejie?name=三上悠亚"><a>找三上悠亚服务</a></Link><br/>
        <Link href="/xiaojiejie?name=桥本有菜"><a>找桥本有菜服务</a></Link>
        <Link href="/dabo?name=安斋拉拉"><a>找安斋啦啦啦服务</a></Link>
        <button onClick={gopush}>去找安斋拉拉</button>
      
     

      </>
    )
}


export default Home
