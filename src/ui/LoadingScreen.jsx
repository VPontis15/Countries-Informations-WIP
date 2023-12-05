import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderDiv = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: ${spin} 1s linear infinite;
`;

function LoadingScreen() {
  return (
    <LoaderDiv>
      <Loader />
    </LoaderDiv>
  );
}

export default LoadingScreen;
