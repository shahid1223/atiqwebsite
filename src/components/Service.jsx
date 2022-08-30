import React ,{useState,useEffect} from 'react'
import { FaArrowLeft ,FaShoppingBag ,FaRegTimesCircle ,FaRegPlusSquare,FaRegTrashAlt} from 'react-icons/fa';
import './Services.css';
// import { Scrollbars } from 'react-custom-scrollbars-2';



function Service() {

  const [data ,setData] = useState([])
  const [load ,setLoad] = useState(true)

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
                <span>(0)</span>
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
            {/* <Scrollbars> */}
              {
                data.map((dataVal , Iddd)=>{
                  const {id,title,price,category,description,image} = dataVal
                  return (
                    <div className="mainBox" key={Iddd}>
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
                        <i><FaRegTimesCircle/></i>
                        <input type="text" />
                        <i><FaRegPlusSquare/></i>
                      </div>
                      <div className="price">
                        <span>{price}</span> 
                      </div>
                      <div className="none">
                        <i><FaRegTrashAlt/></i>
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
