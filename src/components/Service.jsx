import React ,{useState,useEffect} from 'react'
import { FaArrowLeft ,FaShoppingBag ,FaRegTimesCircle ,FaRegPlusSquare,FaRegTrashAlt} from 'react-icons/fa';
import './Services.css';
// import { Scrollbars } from 'react-custom-scrollbars-2';



function Service() {

  const [data ,setData] = useState([])
  const [load ,setLoad] = useState(true)
  const [total ,setTotal] = useState(0)

  const getInfo= async ()=>{
    try{
      const responce = await fetch('https://fakestoreapi.com/products')
    setData(await responce.json())
    setLoad(false)
    }catch(error){
      console.log(' the name is not correct ' + error)
      setLoad(false)
    }
    
  }

  useEffect(()=>{
    getInfo()
  },[])

  if(load){
    return (
      <h1 className="text-center">Loading...</h1>
    )
  }

  const delet =(id)=>{
    let newFil = data.filter((val,valIdd)=>{
      return( id !== val.id)
    })
    setData([newFil])
  }

  return (
    <>
      
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="header">
                <div className="arroy">
                <i><FaArrowLeft/></i>
                <h4>Shopping Cart</h4>
                </div>
                <div className="shopCart"><i><FaShoppingBag/></i>
                <span>{total}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5 ">
              <h1 className="text-center hcolor">Cart</h1>
            <div className="col-md-10 mx-auto bord">
              <div className="info">
              <p>Total Items in Cart</p>
              <div className="total">
            <p>total <span>4000</span> <button>Check out</button></p>
            
          </div>
              </div>
            {/* <Scrollbars> -------------(agr API me pele se id hoto alg se id lagana jaruri nahi he) */}
              {      
                data.map((dataVal)=>{
                  const {id,title,price,category,description,image} = dataVal
                  return (
                    <div className="mainBox" key={id}>
                    <div className="cartBox" >
                      <div className="proImg">
                      <img src={image} className="img-fluid" alt="img"/>
                      <p>{title}</p>
                      </div>
                      <div className="proName">
                        <h5>{category}</h5>
                        <p>{description}</p>
                      </div>
                      <div className="count">
                        <i onClick={()=> setTotal( total>0 ? total - 1 : 0)}><FaRegTimesCircle/></i>
                        <input type="text" />
                        <i  onClick={()=> setTotal(total + 1)}><FaRegPlusSquare/></i>
                      </div>
                      <div className="price">
                        <span>{price}</span> 
                      </div>
                      <div className="none">
                        <i onClick={()=>delet(id)}><FaRegTrashAlt /></i>
                        <p>{id}</p>
                      </div>
                    </div>
                    <hr />
                  </div>
                  )
                })
              }
             
            
              {/* </Scrollbars> */}
            </div>
          
          </div>
        </div>
    </>
  )
}

export default Service

//  <div className="col-md-4 collBox">
//                 <div className="row">
//                   <div className="col-12 cartImg">
//                     <img src={Web} alt="" className="img-thumbnail"/>
//                   </div>
//                   <div className="col-12">
//                     <h5>Name</h5>
//                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ducimus.</p>
//                   </div>
//                   <div className="col-12 d-flex justify-content-between  align-items-center ">
//                     <h5>price <span>$55</span></h5>
//                     <i><FaCalendarPlus/></i>
//                   </div>
//                 </div>
//               </div>