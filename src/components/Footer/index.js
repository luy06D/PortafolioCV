import React from 'react';
import styled from 'styled-components';
import { Bio } from '../../data/constants';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';



const FooterContainer= styled.div`
width: 100%;
padding: 2rem 0;
display: flex;
justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;




const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <Logo>Luis David</Logo>
            <Nav>
                <NavLink href="#about" >Inicio</NavLink>
                <NavLink href="#skills" >Habilidades</NavLink>
                <NavLink href="#experience" >Experiencia</NavLink>
                <NavLink href="#projects" >Proyectos</NavLink>
                <NavLink href="#education" >Educación</NavLink>
            </Nav>
            <SocialMediaIcons>
                <SocialIcon href={Bio.facebook} target="display" ><FacebookIcon/></SocialIcon>
                <SocialIcon href={Bio.whasap} target="display" ><WhatsAppIcon/></SocialIcon>
                <SocialIcon href={Bio.github} target="display" ><GitHubIcon/></SocialIcon>
                <SocialIcon href={Bio.insta} target="display" ><InstagramIcon/></SocialIcon>
            </SocialMediaIcons>
            <Copyright>
                &copy; 2023 Luis cusi. Reservado todos los derechos. 
            </Copyright>
        </FooterWrapper>


    </FooterContainer>
  )
}

export default Footer