import React ,{useState} from 'react'
import './Contact.css'
import { FcFullTrash } from "react-icons/fc";

function Contact() {
  const [email , setEmail] = useState('')
  const [password , setPass] = useState('')
  const [data ,setData] = useState([])

const submit =(event)=>{
  event.preventDefault()
  let newValue = {email : email , password :password} 
  if(!email && !password){
    alert('enter amail')
  }else{
    setData([...data, newValue])
    setEmail('')
    setPass('')
  }
}

const delet=(id)=>{
  let filt = data.filter((evl ,dataId)=>{
    return (dataId !== id )
  })
  setData(filt)
}

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <div className="heading">
            <h1>Contact and your data id strore in backend</h1>
            <p className='animInP'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem eaque hic earum. Delectus aliquam a ullam, tenetur distinctio deleniti. Ipsum.</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-10 mx-auto">
           <div className="form">
            <form action="" onSubmit={submit}>
              <div className='email'>
              <label htmlFor="Email">Email</label>
              <input type="text" value={email} onChange={(e) =>{setEmail(e.target.value)}}/>
              </div>
              <div className='pass'>
              <label htmlFor="Email">Password</label>
              <input type="password" value={password} onChange={(e) =>{setPass(e.target.value)}}/>
              </div>
              <button className='btna' type='submit'>log in</button>
            </form>
           </div>
           <div className="datastor"> 
              {
                data.map((dataVal , id)=>{
                  return(
                    <div className="box" key={id}>
                    <h5 >{`EMAIL IS = ${dataVal.email}  , PASSWORD IS = ${dataVal.password}  ` } <FcFullTrash onClick={()=>delet(id)}/> </h5>
                    </div>
                  )
                })
              }
           </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
