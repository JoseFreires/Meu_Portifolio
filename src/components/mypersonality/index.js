import React from "react";
import { Row, Container, Col } from "react-bootstrap";

import {GiBrain, GiMegaphone, GiLightBulb} from 'react-icons/gi'

import './mypersonalityStyle.css'

export default function MyPersonality() {
    return(
        <Container fluid style={{marginBottom: '20px', borderTop: '3px solid #fff'}}>
            <div style={{color:'#fff', margin:'20px'}}>
                <h1>Meus Pontos Positivos</h1>
            </div>
            <Row>
                <Col>
                    <div className="localPositivo">
                        <div className="bola">
                            <GiBrain size={90}/>
                        </div>
                        <p>Criativo</p>
                    </div>
                </Col>
                <Col>
                    <div className="localPositivo">
                        <div className="bola">
                            <GiMegaphone size={90}/>
                        </div>
                        <p>Comunicativo</p>
                    </div>
                </Col>
                <Col>
                    <div className="localPositivo">
                        <div className="bola">
                            <GiLightBulb size={90} />
                        </div>
                        <p>Proativo</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}