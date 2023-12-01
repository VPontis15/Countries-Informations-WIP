import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

const LoaderDiv = styled.div`
  position: absolute;
  inset: 0;

  backdrop-filter: blur(6px);
`;

// Styled component for the loader
const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);

  width: 150px;
  height: 150px;
  animation: ${spin} 1s linear infinite;
`;

function LoadingScreen() {
  // Your React component using the Loader

  return (
    <LoaderDiv>
      <Loader />
    </LoaderDiv>
  );
}

export default LoadingScreen;
