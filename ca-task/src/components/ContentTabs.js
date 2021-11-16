import React from 'react'
import Tabs from'react-bootstrap/Tabs';
import Tab from'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import image1 from'../images/tab/tab-1.jpg';
import image2 from'../images/tab/tab-2.jpg';
import image3 from'../images/tab/tab-3.jpg';

function ContentTabs() {
  return (
  <Tabs
    defaultActiveKey="one"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"
  >
    <Tab eventKey="one" title="First">
      <Row>
        <Col className="img-col">
          <div>
            <img
                className="d-block w-250px"
                src={image1}
                alt="old tv components"
             />
          </div>
          <div>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
            </p>
            <span className="tabs-social-media">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </span>
          </div>      
        </Col>
      </Row>
    </Tab>
    <Tab eventKey="two" title="Second">
      <Row>
        <Col className="img-col">
          <div>
            <img
                className="d-block w-250px"
                src={image2}
                alt="old tv components"
            />
          </div>
          <div>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
            </p>
            <span className="tabs-social-media">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </span>
          </div>      
        </Col>
      </Row>
    </Tab>
    <Tab eventKey="three" title="Third">
    <Row>
    <Col className="img-col">
          <div>
            <img
                className="d-block w-250px"
                src={image3}
                alt="old tv components"
             />
          </div>
          <div>
            <p>
              Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. 
            </p>
            <span className="tabs-social-media">
              <p>SHARE</p>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
            </span>
          </div>      
        </Col>
    </Row>
    </Tab>
  </Tabs>
  )
}

export default ContentTabs
