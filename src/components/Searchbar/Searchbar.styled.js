import styled from 'styled-components';
import { BiSearchAlt } from "react-icons/bi";

export const Header = styled.header`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    padding: 12px 0;
    background-color: #5c5c8a;
`;

export const Form = styled.form`
position: relative;
`;

export const ButtonIcon = styled.button`
    position: absolute;
    border: none;
    background-color: inherit;
    color: #3d3d5c;
    top: 50%;
    right: 0; 
    transform: translateY(-50%);
`;

export const Input = styled.input`
    width: 320px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;

    @media (max-width: 767px){
    width: 220px;
    font-size: 14px;
  }
`;

export const Icon = styled(BiSearchAlt)`
width: 24px;
height: 24px;
&:hover {
    width: 28px;
    height: 28px;
    }
`;

