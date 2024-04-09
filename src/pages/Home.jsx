import React, { useEffect } from 'react'
import NewsCards from '../components/NewsCards'
import { useState } from 'react'
import { getAllBlogesAIP } from '../services/allAPI';
import { Col, Row } from 'react-bootstrap';
import Addnews from './../components/Addnews';
function Home() {
  const [allBloges,setAllBloges]=useState([])
  const getAllIamges= async()=>{
    const result= await getAllBlogesAIP()
    // console.log(result);
    if(result?.status==200)
    {
      setAllBloges(result?.data);
    }
  }
  useEffect(()=>{
    getAllIamges()
  },[allBloges])
  return (
<>
<Addnews></Addnews>
  <Row style={{marginLeft:'50px'}} className='news-cards d-flex mt-5'>{allBloges?.length>0? allBloges?.map((video,index)=>(<Col  key={index} className=''><NewsCards displayData={video}/></Col>)):<div>No Bloges</div>}</Row>
</>
  )
}

export default Home
