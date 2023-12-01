import styled from "styled-components";

const StyledErrorMessage = styled.p`
  display: inline-block;
  padding: 0.75em;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.2);
  color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
`;

function ErrorMessage() {
  return (
    <StyledErrorMessage>
      There was an error while fetching the data.Please check your internet
      connection.
    </StyledErrorMessage>
  );
}

export default ErrorMessage;
