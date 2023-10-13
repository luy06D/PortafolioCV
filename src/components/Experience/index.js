import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../../data/constants';
import ExperienceCard from '../Cards/ExperienceCard';




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
padding: 40px 0px 80px 0px;
@media (max-width: 960px) {
  padding: 70px;
  
}

`;

const Wrapper = styled.div`
max-width: 1100px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
gap: 12px;
`;


const Titulo = styled.div`
font-size: 42px;
font-weight: 600;
text-align: center;
margin-top: 20px;
color: ${({theme}) => theme.text_primary};

@media (max-width: 786px )  {
  margin-top: 12px;
  font-size: 32px;
  
}
`;

const Descripcion = styled.div`
font-size: 18px;
max-width: 600px;
text-align: center;
color: ${({theme}) => theme.text_secondary};

@media (max-width: 768px) {
  font-size: 16px;
}
`;


const TimeLineSection = styled.div`
width: 100%;
max-width: 1000px;
margin-top: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 12px;
`;





const Experience = () => {
  return (
    <Container id="experience">
        <Wrapper>
            <Titulo>Experiencia</Titulo>
            <Descripcion>Estos son algunos de los proyectos en los que eh participado como practicante hasta el presente año</Descripcion>
            <TimeLineSection>
            <Timeline>
                {experiences.map((experience, index) => (
                    <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant='outlined' color='primary' />
                        {index !== experiences.length && <TimelineConnector />}                                                
                    </TimelineSeparator>
                    <TimelineContent sx={{py: "12px", px: 2}} ></TimelineContent>
                    <ExperienceCard experience={experience}/>
                    </TimelineItem>
                ))}
            </Timeline>
            </TimeLineSection>

        </Wrapper>
    </Container>
  );
};

export default Experience