import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { FaPlay } from 'react-icons/fa'

const Home = () => {

    const baseURL = "http://localhost:3500"

    const [input1 , setInput1] = useState("");
    const [input2 , setInput2] = useState("");
 
    const themeStyle1 = { class : "justify-content-md-end" , backgroundColor : "#86cf86", borderRadius : "15px 0px 0px 15px" };
    const themeStyle2 = { class : "justify-content-md-left" , backgroundColor : "#bfb7b7" , borderRadius : "0px 15px 15px 0px" };

    const [data , setData] = useState([])

    useEffect(() =>{
        const fetchData = async() =>{
            try{
                const response = await axios.get(`${baseURL}/chats`);
                if(response){
                    setData(response.data)
                }
            }
            catch(err){
                console.log(err.message)
            }
        }

        fetchData()

    },[])
    

    const handleSend = async(u_id) =>{
        const newId = data.length  ? data[data.length - 1].id + 1 : 1;
        const newObj = { id : newId, message : u_id === 1 ? input1 : input2 , user_id : u_id }

        try{
            const response = await axios.post(`${baseURL}/chats` , newObj);
            if(response) { setData([...data , newObj]) }
            u_id === 1 ? setInput1('') : setInput2('')
        }
        catch(err){
            console.log(err.message)
        }        
    }

    return (
        <div>
            <Row className='homeView'>
                <Col md={6}>
                    <Row className='justify-content-md-center'>
                        <Col md={8}>
                            <div className='usersMobileView'>
                                <Row>
                                    <Col md={12}>
                                        <div className='userViewHeader'>
                                            <Row style={{ height: '100%' }}>
                                                <Col md={6} style={{ paddingLeft: '15px' }} className="userName">
                                                    <h6>Paul</h6>
                                                </Col>
                                                <Col md={6} className="text-end">
                                                    <img className='userImg' src={require("../assets/images/kohli.jpg")} alt="" />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='userContent'>

                                            {data.length ? data.map((obj) => (
                                                <Row key={obj.id} className={obj.user_id === 1 ? themeStyle1.class : themeStyle2.class}>
                                                    <Col md={8}>
                                                        <p 
                                                            style={{ 
                                                                padding : '5px',
                                                                borderRadius : obj.user_id === 1 ? themeStyle1.borderRadius : themeStyle2.borderRadius,
                                                                background : obj.user_id === 1 ? themeStyle1.backgroundColor : themeStyle2.backgroundColor
                                                            }}
                                                        >{obj.message}</p>
                                                    </Col>
                                                </Row>
                                            )) : (
                                                <Row className='justify-content-md-center'>
                                                    <Col md={8}>
                                                        <p>No Message</p>
                                                    </Col>
                                                </Row>
                                            )}
                                            
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='userViewFooter'>
                                            <input 
                                                style={{ width: '90%', padding: '5px 4px', borderRadius: '10px' }} 
                                                type="text"
                                                value={input1}
                                                onChange={(e) => setInput1(e.target.value)} 
                                                placeholder="Enter Message..."
                                            />
                                            {/* <button style={{width:'9%' , height: '38px' , marginLeft : '2px'}} className=''>S</button> */}
                                            <FaPlay 
                                                style={{ cursor : 'pointer' ,  pointerEvents : (input1.trim()).length === 0 ? 'none' : 'auto' , color: 'green', width: '9.5%', height: '39px', marginLeft: '2px' }}
                                                onClick={() => handleSend(1)} 
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <Row className='justify-content-md-center'>
                        <Col md={8}>
                            <div className='usersMobileView'>
                                <Row>
                                    <Col md={12}>
                                        <div className='userViewHeader'>
                                            <Row style={{ height: '100%' }}>
                                                <Col md={6} style={{ paddingLeft: '15px' }} className="userName">
                                                    <h6>Antony</h6>
                                                </Col>
                                                <Col md={6} className="text-end">
                                                    <img className='userImg' src={require("../assets/images/abd.jpg")} alt="" />
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='userContent'>
                                        {data.length ? data.map((obj) => (
                                                <Row key={obj.id} className={obj.user_id === 2 ? themeStyle1.class : themeStyle2.class}>
                                                    <Col md={8}>
                                                        <p 
                                                            style={{ 
                                                                padding : '5px',
                                                                borderRadius : obj.user_id === 2 ? themeStyle1.borderRadius : themeStyle2.borderRadius,
                                                                background : obj.user_id === 2 ? themeStyle1.backgroundColor : themeStyle2.backgroundColor
                                                            }}
                                                        >{obj.message}</p>
                                                    </Col>
                                                </Row>
                                            )) : (
                                                <Row className='justify-content-md-center'>
                                                    <Col md={8}>
                                                        <p>No Message</p>
                                                    </Col>
                                                </Row>
                                            )}
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <div className='userViewFooter'>
                                            <input 
                                                style={{ width: '90%', padding: '5px 4px', borderRadius: '10px' }} 
                                                type="text"
                                                value={input2}
                                                onChange={(e) => setInput2(e.target.value)}
                                                placeholder="Enter Message..."
                                            />
                                            {/* <button style={{width:'9%' , height: '38px' , marginLeft : '2px'}} className=''>S</button> */}
                                            <FaPlay 
                                                style={{ cursor: 'pointer',  pointerEvents : (input2.trim()).length === 0 ? 'none' : 'auto' , color: 'green', width: '9.5%', height: '39px', marginLeft: '2px' }}
                                                onClick={() => handleSend(2)} 
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Home