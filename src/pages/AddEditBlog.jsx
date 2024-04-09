import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { uploadImageAIP } from './../services/allAPI';
function AddEditBlog() {
  const[uploadeImage,setUploadeImage]=useState({title:"",description:"",type:"",image:""})
  const reloadPage=()=>{
     window.location.reload(false)
  }
  const uploadSubmit = async()=>{
  const {title,description,type,image}=uploadeImage
  if(title && description && type && image)
  {
    const result= await uploadImageAIP(uploadeImage)
    console.log(result);
    if(result.status>=200 && result.status<300)
    {
      alert(`Upload "${result.data.type}" Successfully Compeleted!!`)
      reloadPage()
      window.location.href='http://localhost:5174/'
    }
  }else{
    alert("Please fill the form compeletely!!")
   
  }
    
  }
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
console.log(uploadeImage);
  return (
    <div style={{marginLeft:'40%'}} className='add-container'>
      <h1 style={{marginLeft:'-70%',marginTop:'30px'}} className='d-flex justify-content-center'>AddBlog</h1>
      <div className='add-blog-container'>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField value={uploadeImage.title} onChange={e=>setUploadeImage({...uploadeImage,title:e.target.value})}
          id="outlined-multiline-flexible"
          label="Title"
          multiline
          maxRows={4}
        />
      </div>
      <div>
        <TextField value={uploadeImage.description} onChange={e=>setUploadeImage({...uploadeImage,description:e.target.value})}
          id="filled-multiline-static"
          label="Description"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
      </div>
      <div>
      <div>
        <TextField value={uploadeImage.type} onChange={e=>setUploadeImage({...uploadeImage,type:e.target.value})}
          id="outlined-multiline-flexible"
          label="Type"
          multiline
          maxRows={4}
        />
      </div>
    </div>
    {/* <Form.Group value={uploadeImage.image} onChange={e=>setUploadeImage({...uploadeImage,image:e.target.value})} style={{width:'240px',marginTop:'10px',marginLeft:'10px'}} controlId="formFileSm" className="mb-3">
        <Form.Label>Select Image</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group> */}
      <div>
        <TextField value={uploadeImage.image}  onChange={e=>setUploadeImage({...uploadeImage,image:e.target.value})} 
          id="outlined-multiline-flexible"
          label="Image Url"
          multiline
          maxRows={4}
        />
      </div>
    {/* <Button style={{marginTop:'10px',marginBottom:'20px',marginLeft:"50px"}}
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
    >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button> */}
    </Box>
      </div>
      <Stack style={{marginLeft:'33px'}} direction="row" spacing={2}>
      <Button onClick={uploadSubmit} variant="contained">Update</Button>
    <Link to={'/'}>
        <Button style={{backgroundColor:'red'}} variant="contained">Go Back</Button>
    </Link>  
  </Stack>
    </div>
  )
}

export default AddEditBlog
// "C:\fakepath\3d-rendering-neon-vr-device_405107-157.jpg"
// "C:\fakepath\vvadhaar.png"
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7meA5D2zTuj9AECjEQR6lv9C0PTa5BU4k4IkxNxOFg&s
//https://img.freepik.com/premium-photo/painting-mountain-lake-with-mountain-background_327072-11613.jpg