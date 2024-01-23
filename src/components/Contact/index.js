
import { Alert, Snackbar } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`;

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`;

const Titulo = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Descripcion = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;

  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  background-color: #0093E9;
background-image: linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);


  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    -webkit-filter: brightness(1); /* Propiedad para navegadores WebKit */
    filter: brightness(1); /* Propiedad para otros navegadores modernos */
  }
`





const Contact = () => {

  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wprlyqp', 'template_khoue2e', form.current, 'r3CWN_7PoegBHKDlk')
    .then((result) => {
      setOpen(true);
      form.current.reset();
    }, (error) => {
      console.log(error.text);
    });
  }


  return (
    <Container id='contact'>
        <Wrapper>
            <Titulo>Contactame</Titulo>
            <Descripcion>Hola, mandame un mensaje de que te parecio mi portafolio , Saludos</Descripcion>
            <ContactForm ref={form} onSubmit={handleSubmit}>
                <ContactTitle>Envia un mensaje 🚀 </ContactTitle>
                <ContactInput placeholder="Ingresa tu correo" autoComplete='off' name='user_email'/>
                <ContactInput placeholder="Ingresa tu nombre" autoComplete='off' name='user_name'/>                
                <ContactInputMessage placeholder="Mensaje" autoComplete='off' rows="4" name="message" />
                <ContactButton type="submit" value="Enviar" />                
            </ContactForm>
            <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={()=>setOpen(false)}>
              <Alert onClose={()=>setOpen(false)} severity='success' sx={{width: '100%'}}>
                Mensaje enviado correctamente
              </Alert>
            </Snackbar>
        </Wrapper>
    </Container>
  )
}

export default Contact