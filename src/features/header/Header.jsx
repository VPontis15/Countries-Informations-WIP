import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e3e3e3;
  padding-block: 1.25rem;
`;

const ButtonMode = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.125rem;
  font-family: inherit;
  color: inherit;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(1.25rem, 5vw + 0.25rem, 2.5rem);
`;

const Container = styled.div`
  width: 100%;
  max-width: min(85%, 1440px);
  display: flex;
  margin-inline: auto;
  padding-inline: 1em;
  justify-content: space-between;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HeaderTitle>Where in the World</HeaderTitle>
        <ButtonMode> Dark Mode</ButtonMode>
      </Container>
    </StyledHeader>
  );
}

export default Header;
