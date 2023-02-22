import React from 'react';
import Whatsapp from '../assets/images/whatsapp.png';
import { Row , Col } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Row>
            <Col lg={12} className="header">
                  <img
                      src={Whatsapp}
                      alt="Whatsapp"
                      className='headerImg'
                  />
                  <h1 style={{marginTop: '5px'}}>WhatsApp</h1>
            </Col>
        </Row>
    </div>
  )
}

export default Header