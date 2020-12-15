import React,{useState} from 'react';
function Jspang(){
    let [color,SetColor] = useState('blue')
    const gocolor = () => {
        SetColor(color=='blue'?'red':'blue')
    }
    return (
       <>
            <div>JSPANG</div>
            <button onClick={gocolor}>改变颜色</button>
            <style jsx>
                {`
                    div{
                        color:${color};
                    }
                `}
            </style>

       </>
    )
}
export default Jspang;