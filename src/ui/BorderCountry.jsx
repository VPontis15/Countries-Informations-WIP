import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBorderCountry = styled(Link)`
  border: 1px solid
    ${(props) =>
      props.isLightMode ? "var(--dark-mode-bg)" : "var(--light-mode-bg)"};
  padding: 0.25em 1.25em;
  vertical-align: middle;
  text-decoration: none;
  color: inherit;
`;

const BorderCountry = ({ isLightMode, handleOnClick, country, children }) => {
  return (
    <StyledBorderCountry
      country={country}
      onClick={handleOnClick}
      isLightMode={isLightMode}
      to={`/country/${country}`}
    >
      {children}
    </StyledBorderCountry>
  );
};

export default BorderCountry;
