import React from "react";
import { GridColumn } from "./components/grid-system/GridColumn";
import { GridContainer } from "./components/grid-system/GridContainer";
import { GridRow } from "./components/grid-system/GridRow";
import "./index.css";

function App() {
  return (
    <GridRow>
      <GridColumn
        gridOptions={{
          mobile: 9,
          tablet: 6,
          desktop: 3,
          desktopFHD: 3,
        }}
      >
        Column 01
      </GridColumn>
      <GridColumn grids="m-3 t-6 d-3 fhd-2">Column 02</GridColumn>
      <GridColumn grids="fhd-1">Column 03</GridColumn>
      <GridColumn>Column 04</GridColumn>
      <GridColumn>Column 05</GridColumn>
      <GridColumn>Column 06</GridColumn>
    </GridRow>
  );
}

export default App;
