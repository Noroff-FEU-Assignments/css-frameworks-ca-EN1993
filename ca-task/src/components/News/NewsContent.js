import React from "react";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import image1 from"../Images/news/news-1.jpg";
import image2 from"../Images/news/news-2.jpg";
import image3 from"../Images/news/news-3.jpg";
import image4 from"../Images/news/news-4.jpg";
import image5 from"../Images/news/news-5.jpg";
import image6 from"../Images/news/news-6.jpg";
import image7 from"../Images/news/news-7.jpg";
import image8 from"../Images/news/news-8.jpg";

import Button from "react-bootstrap/Button";


function NewsContent() {
  return(
    <>
      <Row>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image1}
              alt="black white tv"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image2}
              alt="old camera"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image3}
              alt="old black white tv"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image4}
              alt="stereo component"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        
      </Row>
      <Row>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image5}
              alt="old tv component"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image6}
              alt="old camera"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image7}
              alt="old video recorder tape"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        <Col>
          <div className="news-col">
            <img
              className="d-block w-100 h-50 news-image" 
              src={image8}
              alt="old plate player"
            /> 

            <span  className="news--col">
              <h4>Nunc porttitor vel</h4>
              <p>Nunc malesuada eget est fringilla dapibus.</p>
              <Button variant="primary" className="More-btn">More</Button>{' '}
            </span>
          
          </div>
        </Col>
        
      </Row>
    </>
  )
}

export default NewsContent;