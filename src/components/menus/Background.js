import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${process.env.PUBLIC_URL + '/assets/background.jpg'});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Background;