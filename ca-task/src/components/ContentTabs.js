import React from 'react'
import Tabs from'react-bootstrap/Tabs';
import Tab from'react-bootstrap/Tab';

function ContentTabs() {
  return (
  <Tabs
    defaultActiveKey="one"
    transition={false}
    id="noanim-tab-example"
    className="mb-3"
  >
    <Tab eventKey="one" title="First">
      Tab 1
    </Tab>
    <Tab eventKey="two" title="Second">
      Tab 2
    </Tab>
    <Tab eventKey="three" title="Third">
      tab 3
    </Tab>
  </Tabs>
  )
}

export default ContentTabs
