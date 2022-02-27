import styled from 'styled-components';
import LogoImage from '../../assets/Logo.png';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
`

export const Logo = styled.img.attrs({
  src: `${LogoImage}`
})`
  width: 70px;
`
