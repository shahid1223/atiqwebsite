import React,{useEffect,useState} from 'react'
import './Services.css'
import { FaSearch } from "react-icons/fa";
import SearchFilter from 'react-filter-search'
import { Productcard } from './Productcard';

function Service() {
  const [searchInput,setSearchInput] = useState('')
  const [productData,setProductData] = useState([])

  async function getResponse(){
    const res = await fetch('https://fakestoreapi.com/products')
                      .then(res=> res.json())
                       setProductData(await res)
  }

  useEffect(()=>{
    getResponse();
  },[])

  return (
    <div>
      <div className="form">
    <input  type="email" className="form-control" id="exampleInputEmail1" value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} aria-describedby="emailHelp"/>
    <i><FaSearch/></i>
  </div>

<div className="container-fluid mt-5">
  <div className="row">
    <div className="col-md-10 mx-auto ">
    <div className="row">
      <SearchFilter 
      value={searchInput}
      data={productData}
      renderResults={results =>(
        <>{results.map((item, i)=>(
         
            <div className="col-md-4">
          <Productcard data={item} key={i}/>
          </div>
        ))}
        </>

      )}/>
    </div>
  </div>
  </div>
</div>
    </div>
  )
}

export default Service
