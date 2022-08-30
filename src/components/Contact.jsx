import React,{useState} from 'react'

function Contact() {

  const [data , setData] = useState({
    FullName : '',
    Phone : '',
    Email : '',
    Pass : '',
    msg : ''
  })

  const [valData , setValData] = useState([])

  const ChangeValu =(event)=>{
    const {name , value} = event.target;

    setData((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }
  const submitval =(e)=>{
    e.preventDefault()
    if(data.FullName === '' && data.Phone === ''){
      alert('empty value')
    }else{
      setValData([...valData,data])
     setData({
    FullName : '',
    Phone : '',
    Email : '',
    Pass : '',
    msg : ''})
    }
    // const newData = {FullName : data.FullName , Phone : data.Phone , Email : data.Email ,Pass : data.Pass , msg : data.msg }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 mt-5 mx-auto">
            <form action="" onSubmit={submitval}>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name='FullName' value={data.FullName} onChange={ChangeValu} placeholder="Full Name"/>
</div>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name='Phone' value={data.Phone} onChange={ChangeValu} placeholder="Mobile Number"/>
</div>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" name='Email' value={data.Email} onChange={ChangeValu} placeholder="Email"/>
</div>
            <div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
  <input type="password" className="form-control" id="exampleFormControlInput1" name='Pass' value={data.Pass} onChange={ChangeValu} placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" name='msg' value={data.msg} onChange={ChangeValu} rows="3"></textarea>
</div>
<div className="col-12">
    <button type="submit" className="btn btn-primary">Sign in</button>
  </div>
            </form>

            <div className="valuestore">
              {
              valData.map((aryVal , indx)=>{
                  return (
                    <div className="box" key={indx}>
                      <h4>{`the name is ${aryVal.FullName} ; PHONE ${aryVal.Phone} ; EMAIL ${aryVal.Email} ; Password ${aryVal.Pass} ; Message ${aryVal.msg}`}</h4>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
