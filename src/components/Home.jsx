import React ,{useState,useEffect} from 'react'
import './Home.css'
import Web from './image/img2.jpg'
import Cart from "./Cart"
import ShopNav from './ShopNav'


function Home() {
  const [dataa ,setDataa] = useState([])

 const getApi= async ()=>{
  try{
    const fatchApi = await fetch('https://fakestoreapi.com/products')
    setDataa(await fatchApi.json())
  }catch(error){
    console.error(error)
  }
 }

  useEffect(()=>{
    getApi()
  },[])

  
  return (
      <section className="">
        <div className="container-fluid home">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row marg">
                <div className="col-md-6 my-5 box1">
                  <h1>Front end developer <strong>Atiq Developer</strong></h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis est eum, pariatur ea nesciunt impedit dolor consequatur culpa fugiat.</p>
                </div>
                <div className="col-md-6  box2" >
                  <img src={Web} alt="" className="img-fluid animated"/>
                </div>
              </div>
            </div>
          </div>
          </div>
          <ShopNav/>
     <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
            <div className="totalTop mt-4 mx-3">
              <p>Total :<span>$2000</span></p>
              <button onClick={()=>(setDataa([]))}>Remove All</button>
            </div>
          <div className={dataa.length>0? "collection mt-3" : '' }>
            <div className="row d-flex justify-content-between align-items-center">
              {
              dataa.map((event)=>{
                return ( 
                  <Cart key={event.id} {...event} dataa={dataa} setDataa={setDataa}/>      
                )
              })
              }
            </div>
          </div>
          </div>
      </div>
     </div>  

      </section>
  )
  }
export default Home
