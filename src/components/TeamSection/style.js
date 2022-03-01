import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-self: center;
  margin-top: 60px;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }
`