import React,{useState} from 'react'
import { FaCalendarPlus ,FaCaretSquareUp,FaCaretSquareDown ,FaRegTrashAlt} from "react-icons/fa";

function Cart(props) {
    const { 
        id,
        title,
        price,
        category,
        image,
        dataa,
        setDataa} = props

        const delet=(id)=>{
            const delData = dataa.filter((value)=>{
                return( id !== value.id
                )
            })
            setDataa(delData)
        }
      const [incrData,setInceData] = useState(1)
  return (
        <div className="col-md-4 collBox">
                <div className="row space">
                  <div className="col-12 cartImg">
                    <img src={image} alt="" className="img-thumbnail"/>
                  </div>
                  <div className="col-12 mt-3 title">
                    <h5>{title}</h5>
                    <p>Lorem ipsum dolor sit amet <span>({category})</span></p>
                    <div className="num">
                     <i onClick={()=>setInceData(incrData > 1?incrData-1:1)}><FaCaretSquareUp/></i>
                        <input type="text" value={incrData} onChange={(e)=>{setInceData(e.target.value)}}/>
                        <i onClick={()=>setInceData(incrData+1)}><FaCaretSquareDown/></i>
                    </div>
                  </div>
                  <div className="col-12 d-flex justify-content-between  align-items-center price">
                    <h5>$<span>{price}</span></h5>
                    <i><FaCalendarPlus/></i>
                    <i onClick={()=>{delet(id)}}><FaRegTrashAlt/></i>
                  </div>
                </div>
              </div>
  )
}

export default Cart
