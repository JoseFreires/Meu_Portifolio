import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { FaInstagram, FaLinkedin } from 'react-icons/fa'


import './principalStyle.css'

export default function Principal(){
    return(
        <Container fluid className="containerPrincipal">
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
                <h1>Meu perfil</h1>
                <p>Sou um Desenvolvedor Iniciante</p>
            </div>
            <Row style={{ display:'flex', alignItems:'center', width: '80%', textAlign:'justify'}}>
                <Col>
                    <h1>Sobre mim</h1>
                    <p> 
                        Iniciei minha carreira de desenvolvedor no segundo semestre de 2021 
                        a qual comecei o meu curso de Desenvolvimento de Sistemas no SENAI.
                        Nesse curso aprendi sobre diversas linguagens de programação, como: 
                        HTML, CSS, JavaScript, Python e SQL. 
                        
                    </p>
                    <p>
                        Eu sempre tive facilidade em FrontEnd, mas meu objetivo é ser FullStack.
                        Gosto de aprender coisas novas e superar novos desafios.
                    </p>
                </Col>
                <Col style={{ display:'flex', alignItems:'center', justifyContent:"center" }}>
                    <img id="image_profile" src="https://avatars.githubusercontent.com/u/88195769?v=4" alt=""/>
                </Col>
                <Col>
                    <h1>Detalhes</h1>
                    <p>Nome: Jose Freires</p>
                    <p>Ano de nascimento: 2004</p>
                    <p>Localização: São Paulo, SP</p>
                    <a href="https://www.instagram.com/its_just_joose/" target="_blank">
                        <FaInstagram size={30}/>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-guilherme-silva-freires-27b778227/" target="_blank">
                        <FaLinkedin size={30}/>
                    </a>
                    
                    
                </Col>
            </Row>
        </Container>
    )
}