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
`;

export const ModalImg = styled.img`
display: flex;
    max-width: calc(100vw - 64px);
    max-height: calc(100vh - 32px);
`;