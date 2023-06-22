import React from "react";
import { Row, Col, Card, Button, Container } from "react-bootstrap";

import { FaUserCircle, FaPizzaSlice, FaEye } from "react-icons/fa";
import { TbApi } from 'react-icons/tb'
import { DiGithubBadge } from "react-icons/di"

import './myprojectsStyle.css'

export default function MyProjects(){
    return(
        <Container fluid className="containerCardsProjects">
            <div style={{margin: '20px', width:"100%"}}>
                <h1>Meus Projetos</h1>
            </div>
            <Row style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Card className="cardProject">
                    <Card.Body className="cardProjectBody">
                        <TbApi size={80}/>
                        <Card.Title style={{fontWeight: 'bold'}}>Studio Ghibli</Card.Title>
                        
                        <Card.Text style={{width:"95%"}}>
                            Um projeto desenvolvido com o objetivo de praticar 
                            o consumo de uma API. A API escolhida foi de um estúdio de animação
                            japonesa chamada Studio Ghibli, na aplicação é consumido as informações 
                            em relação aos filmes produzidos pela empresa.
                        </Card.Text>
                        <div>
                            <a href="https://github.com/JoseFreires/Studio-Ghibli" target="_blank">
                                <DiGithubBadge size={40}/>
                            </a>
                            <a href="https://studioghibliapi.vercel.app" target="_blank">
                                <FaEye size={35}/>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="cardProject">
                    <Card.Body className="cardProjectBody">
                        <FaUserCircle size={80}/>
                        <Card.Title style={{fontWeight: 'bold'}}>Login Simples</Card.Title>
                        <Card.Text style={{width:"95%"}}>
                            Este projeto foi desenvolvido com o propósito de aprimorar habilidades 
                            em implementação de autenticação de usuários, 
                            um recurso essencial presente na maioria dos sites contemporâneos.
                        </Card.Text>
                        <div>
                            <a href="https://github.com/JoseFreires/simple-login" target="_blank">
                                <DiGithubBadge size={40}/>
                            </a>
                            <a href="https://paginalogin-josefreires.vercel.app/" target="_blank">
                                <FaEye size={35}/>
                            </a>
                        </div>
                    </Card.Body>
                </Card>
                <Card className="cardProject">
                    <Card.Body className="cardProjectBody">
                        <FaPizzaSlice size={80}/>
                        <Card.Title style={{fontWeight: 'bold'}}>
                            Pizzaria Giuseppe
                        </Card.Title>
                        <Card.Text>
                            Este projeto foi o primeiro que tive que fazer todas as parte 
                            da aplicação (FrontEnd, BackEnd, Database) sozinho. Foi um desafio,
                            eu admito.
                        </Card.Text>
                        <Card.Text>
                            Utilizei um banco NoSQL pela primeira vez (o MongoDB) e utilizei bootstrap 
                            no ReactJS 
                        </Card.Text>
                        <div>
                            <DiGithubBadge size={40}/>
                            <FaEye size={35}/>
                        </div>
                    </Card.Body>
                    
                </Card>
            </Row>
        </Container>
    )
}