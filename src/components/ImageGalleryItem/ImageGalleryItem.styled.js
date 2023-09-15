import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const ImgWrapper = styled.li`
    border: 2px solid #3d3d5c;
    border-radius: 2px;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
        box-shadow: 2px 2px 6px 6px rgba(194, 194, 214);
    }
`;