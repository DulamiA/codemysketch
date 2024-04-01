import React from 'react'
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
  } from "./FooterElements";
  import NavLogo from '../NavBar/NavLogo.svg';

function Footer() {
  return (
    <Box>
        <Container>
            <Row>
                <Column>
                    <Heading>INFORMATION</Heading>
                    <FooterLink href="/">Home</FooterLink>
                    <FooterLink href="/uploadSketch">Let's Code</FooterLink>
                    <FooterLink href="/howToUse">How it works</FooterLink>
                    <FooterLink href="/pricing">Pricing</FooterLink>
                </Column>
                <Column>
                    <Heading>SUPPORT</Heading>
                    <FooterLink href="/aboutUs">About Us</FooterLink>
                    <FooterLink href="#">Contact Us</FooterLink>
                </Column>
                <Column>
                    <Heading>LEGAL</Heading>
                    <FooterLink href="#">Terms and Conditions</FooterLink>
                    <FooterLink href="#">License Agreement</FooterLink>
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Copyright Information</FooterLink>
                    <FooterLink href="#">Cookies Policy</FooterLink>
                    <FooterLink href="#">Cookies Settings</FooterLink>
                </Column>
                <Column>
                    <Heading>SOCIAL LINKS</Heading>
                    <FooterLink href="#">Facebook</FooterLink>
                    <FooterLink href="#">Instagram</FooterLink>
                    <FooterLink href="#">YouTube</FooterLink>
                    <FooterLink href="#">LinkedIn</FooterLink>
                </Column>
            </Row>
            <hr style={{color:'white', width:'100%'}}/> 
            <div style={{display:'flex',flexDirection:'column', alignItems:'center', marginTop:'20px', marginBottom:'20px'}}>
                <div style={{display:'flex', alignItems:'center'}}>
                    <img 
                    src={NavLogo} 
                    className='nav-logo' 
                    alt='navLogo'
                    />
                    <span style={{color:'white', fontSize:'13px', marginLeft:'20px'}}>Copyright © 2019-2023 CodeMySketch. All rights reserved.</span>
                </div>
            </div>
        </Container>
    </Box>
  )
}

export default Footer
