import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
    background: #20232A;
    height: 70px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding:0.1rem calc((100vw - 1100px) / 2);
    z-index:100;
`

export const NavLogoLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#9EE493;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#9EE493;
    }
    &:hover {
        color: #9EE493;
        transition: 200ms ease-in;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenue = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 780px){
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right:24px;

    @media screen and (max-width: 780px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 8px;
    background: #9EE493;
    padding: 9px 20px;
    color: #000000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transistion: all 0.2s ease-in-out;
        background:  #56974c;
        color: #fff
    }
`

export const NavLinkLogIn = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 2rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#9EE493;
    }
`

