import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  align-self: center;
  margin-top: 120px;
  justify-content: space-between;
  width: 600px;
  @media screen and (max-width: 540px) {
    flex-direction: column;
    align-items: center;
  }
`