import styled from "styled-components";
import { gridConfigs } from "../../../config/gridConfig";

export const Container = styled.div`
  width: 100%;
  max-width: ${gridConfigs.row.maxWidth};

  height: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: ${gridConfigs.row.gap};

  box-sizing: border-box;

  margin: 0 auto;

  transition: ${gridConfigs.general.transition};
`;
