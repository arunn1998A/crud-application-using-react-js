import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
// import { getAllBlogesAIP } from '../services/allAPI';
import { removeBlogesAPI } from './../services/allAPI';

function NewsCards({displayData}) {
  const removeBloges= async(vId)=>{
  await removeBlogesAPI(vId)
  
  }
  // const [allBloges,setAllBloges]=useState([])
  // const getAllIamges= async()=>{
  //   const result= await getAllBlogesAIP()
  //   console.log(result);
  //   if(result?.status==200)
  //   {
  //     setAllBloges(result?.data);
  //   }
  // }
  // useEffect(()=>{
  //   getAllIamges()
  // },[])
    const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  // console.log(allBloges);
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={displayData?.image} />
      <Card.Body>
        <div style={{width:'100%'}} className='d-flex justify-content-between'>
          <Card.Title>{displayData?.title.slice(0,15)} ..</Card.Title>
          <Button style={{marginBottom:'10px'}} className='btn btn-success '>{displayData?.type}</Button>
        </div>
        <Card.Text>
          {displayData?.description.slice(0,140)}.....
        </Card.Text>
        <div  className='d-flex'>
        {values?.map((v,idx) => ( 
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
        Full screen
      </Button>
      
      ))}
          <i onClick={()=>{removeBloges(displayData.id)}} style={{marginLeft:'70px',cursor:'pointer',color:'red',paddingTop:'10px'}} class="fa-solid fa-trash"></i>
          {/* <i style={{marginLeft:'20px',cursor:'pointer',color:'green',paddingTop:'20px'}} class="fa-solid fa-pen-to-square"></i> */}
         
      </div>
      </Card.Body>
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>    
            <Modal.Title  style={{width:'800px',color:'black',fontWeight:'600'}}>{displayData?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width:'100%'}} className='news-container'>
                <img style={{width:'100%',height:'550px'}} className='img-fluid' src={displayData?.image} alt="" />
            </div>
            <Button className='mt-2' style={{marginLeft:'1350px',backgroundColor:"green"}}>{displayData?.type}</Button>
            <p className='mt-3'>{displayData?.description}</p>
        </Modal.Body>
      </Modal>
    </Card>
      </div>
      {/* <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>News Head</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width:'100%'}} className='news-container'>
                <img style={{width:'100%',height:'550px'}} className='img-fluid' src="https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maiores molestiae aliquam facilis sed enim voluptates voluptate? Similique nihil reprehenderit accusantium, omnis, perspiciatis adipisci maiores debitis nisi doloribus quis aut.
            Amet modi, illo, sint error eaque accusantium asperiores nostrum laboriosam aliquam quae aspernatur fugiat iste alias natus quod similique. Doloremque laudantium tempore error aliquam iure inventore vitae consequuntur odio quae.
            Amet ex fugiat error distinctio nisi? Nisi, provident. Consequuntur, perferendis ex. Ipsam, adipisci iste! Exercitationem temporibus sint, debitis asperiores voluptatem perferendis excepturi minus ea modi explicabo deserunt cupiditate recusandae fugit.
            Minus quo assumenda sit atque maxime ratione minima deleniti, vero possimus aut! Reprehenderit quisquam quod, sint non unde repellat! Aliquam laudantium molestias obcaecati accusamus inventore dignissimos itaque, repellat aspernatur quaerat.
            Aspernatur perferendis iure, natus fugiat quas a quod in, qui dolorem, aut cupiditate! Architecto veritatis odit eligendi quaerat maxime! Quod nobis dolor, ratione totam modi consequuntur? Consequatur nam tempore veniam?
            Ut accusantium magni architecto consectetur voluptates quisquam quasi esse, sit vitae laudantium corrupti ipsa dolor eligendi fuga recusandae veniam commodi aliquam qui ex debitis! Assumenda alias illo veritatis quidem consectetur.
            Repellat quod eligendi aut vero ex dolorem delectus. Modi commodi tempore assumenda consequatur perferendis libero eligendi enim repellendus, quos, pariatur sequi tenetur sit adipisci facere vero deleniti. A, officia laboriosam?</p>
        </Modal.Body>
      </Modal> */}
    </>
  )
}

export default NewsCards
