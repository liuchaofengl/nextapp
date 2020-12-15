import { withRouter} from "next/router"
import Link from "next/Link"

import "../mock/index.js"
import axios from "axios"
function Xiaojiejie({router,list}){
    return (
        <>
            <div>{ router.query.name },来为我们服务啦</div>
            <Link href="/"><a>返回首页</a></Link>
            <ul>
                {
                      list.map((item,index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </>
    )
}
Xiaojiejie.getInitialProps = async () => {
    const res =await axios.get('/list')
    console.log(res)
    return  res.data.data
}
export default withRouter(Xiaojiejie)

