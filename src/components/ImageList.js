import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ImageList  = (props)=>{
    
    // src = {images.urls.regular}
    return(

        <Row xs='auto' sm='auto' md='auto' lg='auto' xl='auto' xxl='auto' className='gy-5'>
            
            {
                props.images.map((images,index)=>{

                    return (<><Col xs sm md lg xl xxl><img src={images.urls.regular} style={{width:'250px',height:'200px'}} alt='ooo'/></Col>
                        
                        
                        </>
                    )
                })
            }
            
        </Row>
    )

   
    
}

export default ImageList;

