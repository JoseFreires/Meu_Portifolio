import React from "react";
import { Container, Dropdown, Row } from "react-bootstrap";

import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaNode, FaPython } from "react-icons/fa";
import { DiMysql, DiMongodb } from "react-icons/di";

import './mydevStyle.css'

export default function MyDev(){
    return(
        <Container fluid style={{color:"#fff", borderTop: '3px solid #fff'}}>
            <div style={{color:'#fff', margin:'20px'}}>
                <h1>Conhecimento em Desenvolvimento</h1>
            </div>
            <Container fluid style={{display:'flex', alignItems:'center', justifyContent:"center", flexDirection:'column'}}>
                <Dropdown>
                    <Dropdown.Toggle id="dropdownDev">FrontEnd</Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor:'#d9d9d9'}}>
                        <Dropdown.Item className="localDropdown">
                            <Row style={{display:'flex', flexDirection:'row'}}>
                                <div className="containerLanguage">
                                    <FaHtml5 size={80}/>
                                    <h3>HTML</h3>
                                </div>

                                <div className="containerLanguage">
                                    <FaCss3Alt size={80}/>
                                    <h3>CSS</h3>
                                </div>
                                
                                <div className="containerLanguage">
                                    <FaReact size={80}/>
                                    <h3>ReactJS</h3>
                                </div>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown >
                    <Dropdown.Toggle id="dropdownDev">BackEnd</Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor:'#d9d9d9'}}>
                        <Dropdown.Item className="localDropdown">
                            <Row>
                                <div className="containerLanguage">
                                    <FaJs size={80}/>
                                    <h3>JavaScript</h3>
                                </div>
                                <div className="containerLanguage">
                                    <FaNode size={80}/>
                                    <h3>Node JS</h3>
                                </div>
                                <div className="containerLanguage">
                                    <FaPython size={80}/>
                                    <h3>Python</h3>
                                </div>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="dropdownDev">Database</Dropdown.Toggle>
                    <Dropdown.Menu style={{backgroundColor:'#d9d9d9'}}>
                        <Dropdown.Item className="localDropdownSecond">
                            <Row>
                                <div className="containerLanguage">   
                                    <DiMongodb size={80}/>
                                    <h3>MongoDB</h3>
                                </div>
                                <div className="containerLanguage">
                                    <DiMysql size={80}/>
                                    <h3>MySQL</h3>
                                </div>
                            </Row>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>

        </Container>
    )
}