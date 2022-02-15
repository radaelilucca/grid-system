import styled from "styled-components";
import { gridConfigs } from "../../../config/gridConfig";

const { breakpoints } = gridConfigs;

const getColumnWidth = (value) => {
  let width;

  if (!value) {
    width = 8.33;
  } else {
    width = (value / 12) * 100;
  }

  const styles = `
     width: ${width}%;
     flex: ${value ? "none" : 1}`;

  return styles;
};

export const Container = styled.div`
  padding: ${gridConfigs.cell.padding};
  min-height: 1px;
  box-sizing: border-box;

  border: 1px solid red;

  transition: ${gridConfigs.general.transition};

  @media screen and (max-width: ${breakpoints.mobile}) {
    ${({ mobile }) => getColumnWidth(mobile)};
  }

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
    ${({ tablet }) => getColumnWidth(tablet)};
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    ${({ desktop }) => getColumnWidth(desktop)};
  }

  @media screen and (min-width: ${breakpoints.desktopFHD}) {
    ${({ desktopFHD }) => getColumnWidth(desktopFHD)};
  }

  @media screen and (min-width: ${breakpoints.desktopQHD}) {
    ${({ desktopQHD }) => getColumnWidth(desktopQHD)};
  }

  @media screen and (min-width: ${breakpoints.desktopUHD}) {
    width: ${({ desktopUHD }) => getColumnWidth(desktopUHD)};
  }
`;
