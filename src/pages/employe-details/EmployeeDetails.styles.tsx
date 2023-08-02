import { Box, Button } from '@mui/material';
import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 80vw;
  height: 100vh;
  background-color: #212121;
  float: left;
  color: white;
  padding: 20px;

  display: flex;
  flex-direction: column;
`;

export const PageHeader = styled.div`
  width: 100%;
  height: 10vh;
  border: 1px solid white;
  color: white;
  padding: 20px;
  margin: 30px 0;
  font-size: 30px;
  letter-spacing: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled(Box)`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditButton = styled(Button)`
  width: 400px;
  padding: 10px;
`;

export const style = {
  color: 'white',
};
