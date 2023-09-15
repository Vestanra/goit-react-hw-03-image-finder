import styled from 'styled-components';

export const LoadMore = styled.button`
  display: block;
  padding: 8px 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 2px;
  background-color: #5c5c8a;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  color: #fff;
  border: 0;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  min-width: 180px;
  border-radius: 4px;
  &:hover {
    background-color: #47476b;
  }
`;