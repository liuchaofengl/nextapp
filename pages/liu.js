
import axios from "axios"
import '../mock/index'
// getStaticProps中返回的stars, build_time数据
function BuildTimeStars() {
  return <div>123</div>
}

// 在构建时运行
export async function getStaticProps() {
  const res = await axios.get('https://api.github.com/repos/zeit/next.js')
   console.log(res)
  

  return {
    props: {
      
    },
  }
}

export default BuildTimeStars

