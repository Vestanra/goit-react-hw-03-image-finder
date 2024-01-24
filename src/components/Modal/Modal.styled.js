import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledReactModal = styled(ReactModal)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: auto;
max-height: 90vh;
overflow-y: auto;
padding: 24px 12px;
box-sizing: border-box;

/* @media (min-width: 1440px) {
    width: 592px;
    padding: 32px 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    width: 704px;
    padding: 32px 24px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 280px;
  } */
`;

export const ModalImg = styled.img`
display: flex;
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 32px);
`;