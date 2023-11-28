import styled from "styled-components";
import Header from "../header/Header";

const StyledLayout = styled.div``;

function Layout({ children }) {
  return (
    <div>
      <StyledLayout>
        <Header />
        {children}
      </StyledLayout>
    </div>
  );
}

export default Layout;
