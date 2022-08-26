import React from 'react'
import Aboutimg from './image/img3.jpg'

function About() {
  return (
    <section className="">
    <div className="container-fluid home">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="row marg">
            <div className="col-md-6  box2" >
              <img src={Aboutimg} alt="" className="img-fluid animated"/>
            </div>
            <div className="col-md-6 my-5 box1">
              <h1> <strong>Atiq Developer</strong></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius debitis est eum, pariatur ea nesciunt impedit dolor consequatur culpa fugiat.</p>
              <button type="button" className="btn btn-dark">Dark</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About
