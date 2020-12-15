import { withRouter } from "next/router"
import "../mock/index.js"
import axios from "axios"
function Dabo({router,list}){
    return (
      <>
          <div>{router.query.name}</div>
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
Dabo.getInitialProps =async () =>{
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await axios.get("/list")
    console.log(res)
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return res.data.data
     
    
  }

export default withRouter(Dabo)