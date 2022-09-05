import React ,{useReducer} from 'react'
import Aboutimg from './image/img3.jpg'
import './About.css'

const initState = 0
const reduce=(state,action)=>{
  console.log(state,action)
  if(action.type === 'increase'){
    return state +1
  }
  if(action.type === 'decrease'){
    return (state > 0 ? state - 1 : 0)
  }
  return (state)
}

function About() {

  const [state,dispatch] = useReducer(reduce,initState)

  // useEffect(()=>{
  //   document.title = `chat ${(state> 0? state: '')}` 
  // })
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

     {/* useReducer hook practice                       */}

     <div className="useRedu">
      <h1>{state}</h1>
      <button onClick={()=>{dispatch({type: 'increase'})}}>INCREASE</button>
      <button onClick={()=>{dispatch({type: 'decrease'})}}>DECREASE</button>
     </div>

  </section>
  )
}

export default About
