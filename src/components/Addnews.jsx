import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Addnews() {
  return (
    <div className='add-blog mt-5'>
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img  height={'300px'}
          className=" d-block w-100"
          src="https://image.cnbcfm.com/api/v1/image/107337896-1700663701898-08283-12_WingsPlatform_5_99_DT_Presell_17_875x10_875_CR.jpg?v=1700668725&w=929&h=523&vtcrop=y"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img  height={'300px'}
          className=" d-block w-100"
          src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/Popeyes-Wings-Platform.jpeg?itok=A9Qr5f9s"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img  height={'300px'}
          className=" d-block w-100"
          src="https://gray-weau-prod.cdn.arcpublishing.com/resizer/v2/T4SSLB2O3FDPDIWKJOUNCXK6OM.jpg?auth=41b1d7f72b283376d27e7eb58028bc1d2bae6e8eafa204d1bae33281876330b5&width=800&height=450&smart=true"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Addnews
