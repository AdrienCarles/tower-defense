import styled from 'styled-components';
import backgroundImage from '../../assets/background.jpg';

const Background = styled.div`
background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Background;