import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  margin: 20px auto;
  color: #fff;
  background: #ff9000;
  padding: 10px;
  font-size: 18px;
  border: 1px solid #ff9000;
  

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
