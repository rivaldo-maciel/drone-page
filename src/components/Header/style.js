import styled from 'styled-components';
import LogoImage from '../../assets/Logo.png';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { Close } from '@styled-icons/evaicons-solid/Close';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 300px;
  padding: 10px;
  @media screen and (max-width: 414px) {
    display: none;
  }
`

export const Logo = styled.img.attrs({
  src: `${LogoImage}`
})`
  width: 70px;
`

export const MenuIcon = styled(Menu)`
  height: 30px;
`

export const CloseIcon = styled(Close)`
  height: 30px;
`
