import React from 'react'
import './Home.css'
import Web from './image/img2.jpg'

function Home() {
  return (
      <section className="">
        <div className="container-fluid home">
          <div className="row">
            <div className="col-md-10 mx-auto">
              <div className="row marg">
                <div className="col-md-6  box1">
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
      </section>
  )
}

export default Home
