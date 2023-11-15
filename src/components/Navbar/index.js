import React from "react";
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GithubButton, ButtonContainer, MobileIcon, MobileMenu, MobileMenuLinks } from './NavbarStylecComponent'
import {DiUikit} from "react-icons/di";
import {FaBars} from "react-icons/fa";
import {Bio} from "../../data/constants";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from 'styled-components';


const Navbar = () => {
    const redireccionar = () => {
        const githubURL = Bio.github;
        window.open(githubURL, '_blank');
      };
    const [open , setOpen] = React.useState(false);
    const theme = useTheme();
    return <Nav>
        <NavContainer>
            <NavLogo to='/'>
                <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
                <DiUikit size="3rem" /> <Span>Portafolio</Span>
                </a>
            </NavLogo>
            <MobileIcon>
                <FaBars
                    onClick={() => {
                        setOpen(!open);
                    }}
                />
            </MobileIcon>
            <NavItems>
                <NavLink href="#about">Inicio</NavLink>
                <NavLink href='#skills'>Habilidades</NavLink>
                <NavLink href='#experience'>Experiencia</NavLink>
                <NavLink href='#projects'>Proyectos</NavLink>
                <NavLink href='#education'>Educación</NavLink>
                <NavLink href='#contact'>Contacto</NavLink>
                               
            </NavItems>
            <ButtonContainer>
                <GithubButton onClick={redireccionar}>
                    <GitHubIcon/></GithubButton>
            </ButtonContainer>
        </NavContainer>
        {
            open && (
            <MobileMenu open={open}>
                <MobileMenuLinks href='#about' onClick={() => {                    
                setOpen(!open)
                }}>Inicio</MobileMenuLinks>

                <MobileMenuLinks href='#skills' onClick={() => {
                setOpen(!open)
                }}>Habilidades</MobileMenuLinks>

                <MobileMenuLinks href='#experience' onClick={() => {
                setOpen(!open)
                }}>Experiencia</MobileMenuLinks>

                <MobileMenuLinks href='#projects' onClick={() => {
                setOpen(!open)
                }}>Proyectos</MobileMenuLinks>

                <MobileMenuLinks href='#education' onClick={() => {
                setOpen(!open)
                }}>Educación</MobileMenuLinks>

                <MobileMenuLinks href='#contact' onClick={() => {
                setOpen(!open)
                }}>Contacto</MobileMenuLinks>

                

                <GithubButton style={{padding: '10px 16px',background: "white", 
                color: '#000000',width: 'max-content'}} onClick={redireccionar} target="_blank">Github Perfil</GithubButton>
          
            
            </MobileMenu>
            
            )}
    </Nav>;
};

export default Navbar;
