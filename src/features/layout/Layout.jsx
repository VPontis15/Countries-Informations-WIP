import React, { useState, createContext, useContext } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../header/Header";

// Create a context to manage isLightMode state
const LightModeContext = createContext();

const GlobalStyle = createGlobalStyle`
  body {
    color: var(--light-mode-text);
    font-family: "Nunito Sans", sans-serif;
    background-color: ${(props) =>
      props.isLightMode ? "var(--light-mode-bg)" : "var(--dark-mode-bg)"};
      color: ${(props) =>
        props.isLightMode ? "var(--light-mode-text)" : "white"};
        
        transition: all .25s ease-in
  }

  button {
    color: inherit;
  }
`;

const StyledLayout = styled.div``;

function Layout({ children }) {
  const [isLightMode, setIsLightMode] = useState(false);

  function handleLightMode() {
    setIsLightMode((prevMode) => !prevMode);
  }

  return (
    <div>
      <LightModeContext.Provider value={{ isLightMode, handleLightMode }}>
        <GlobalStyle isLightMode={isLightMode} />
        <StyledLayout>
          <Header isLightMode={isLightMode} handleLightMode={handleLightMode} />
          {children}
        </StyledLayout>
      </LightModeContext.Provider>
    </div>
  );
}

export function useLightMode() {
  return useContext(LightModeContext);
}

export default Layout;
