import React, {useState,useEffect} from 'react'
import './Home.css'
import Web from './image/img2.jpg'


function Home() {

  const [storeData ,setStoreData] = useState([])

  const getApi= async ()=>{
  const respnse = await fetch('https://jsonplaceholder.typicode.com/posts')
  // let data = await respnse.json()
  // console.log(data)

  setStoreData(await respnse.json())
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

          <div className="container-fluid api">
                <div className="row marg">
           <h1 className="heading">Fatch api</h1>
            {
              storeData.map((stateVal ,id)=>{
                return (
                  
            <div className="col-md-4 colo" key={id}>
              <div className="box">
                <div className="image">
                  <img src="" alt=""  />
                </div>
                <div className="text">
                  <p>{stateVal.title}</p>
                  <div className="innerBox">
                  <div className="a"><p>{stateVal.id}</p> <span>55</span></div>
                  <div className="a"><p>{stateVal.userId}</p> <span>55</span></div>
                  <div className="a"><p>id</p> <span>55</span></div>  
                  </div>
                </div>
              </div>
                <p>{stateVal.body}</p>
            </div>
        
            )
              })
            }

          </div>
        </div>
        </div>
      </section>
  )
}

export default Home
