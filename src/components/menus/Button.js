import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: ${props => props.top || 'auto'};
`;

const StyledButton = styled.button`
  background: gray;
  color: white;
  font-size: 1.5em;
  margin: 1em;
  padding: 0.5em 2em;
  border: none;
  border-radius: 5px;
  width: 200px; // fixe la largeur du bouton
  text-align: center;
`;

const Button = ({ children, onClick, top }) => {
  return (
    <ButtonContainer top={top ? `${top}%` : 'auto'}>
      <StyledButton onClick={onClick}>
        {children}
      </StyledButton>
    </ButtonContainer>
  );
};

export default Button;