import styled from 'styled-components';

export const Gallery = styled.ul`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
  padding: 16px 24px;
@media (min-width: 768px) and (max-width: 1439px){
    grid-template-columns: 1fr 1fr 1fr;
  }
@media  (max-width: 767px){
    grid-template-columns: 1fr;
  }
`;