import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants' 
import {Container, Wrapper, Title, Desc, ToggleButtonGroup, ToggleButton, Divider, CardContainer} from './ProjectsStyle'
import { Button } from '@mui/material'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Proyectos</Title>
        <Desc>              
          He participado en algunos proyectos para ciertas empresas y también he llevado a cabo iniciativas personales, 
          los cuales se encuentran detallados a continuación. A continuación, presento algunos de mis proyectos.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Aplicación web</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>Aplicación web</ToggleButton>
          }
          <Divider />

          {toggle === 'web game' ?
            <ToggleButton active value="web game" onClick={() => setToggle('web game')}>Juegos Web</ToggleButton>
            :
            <ToggleButton value="web game" onClick={() => setToggle('web game')}>Juegos Web</ToggleButton>
          }
          <Divider />
          
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>Android APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>Android APP'S</ToggleButton>
          }          
          {/* {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>Machine Learning</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>              
            ))}            
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects