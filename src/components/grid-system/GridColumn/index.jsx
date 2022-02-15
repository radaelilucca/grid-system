import React, { useEffect, useState } from "react";

import { Container } from "./styles";

const GridColumn = ({ children, grids = "", gridOptions }) => {
  const [parsedGrids, setParsedGrids] = useState({
    mobile: null,
    tablet: null,
    desktop: null,
    desktopFHD: null,
    desktopQHD: null,
    desktopUHD: null,
  });

  const gridsInitialsMap = {
    m: "mobile",
    t: "tablet",
    d: "desktop",
    fhd: "desktopFHD",
    qhd: "desktopQHD",
    uhd: "desktopUHD",
  };

  const parseGridsString = () => {
    if (!grids) return;

    const gridsString = grids;

    const gridStringOptions = gridsString.split(" ");

    const gridValues = {};

    gridStringOptions.forEach((gridItem) => {
      const [initial, value] = gridItem.split("-");

      const gridName = gridsInitialsMap[initial];

      if (gridName) {
        gridValues[gridName] = Number(value);
      }
    });

    setParsedGrids(gridValues);
  };

  const parseGridOptions = () => {
    if (!gridOptions) return;

    const options = Object.keys(gridOptions);

    const validOptions = Object.keys(parsedGrids);

    const gridValues = {};

    options.forEach((optionItem) => {
      const isValid = validOptions.includes(optionItem);

      if (isValid) {
        gridValues[optionItem] = gridOptions[optionItem];
      }
    });

    setParsedGrids(gridValues);
  };

  useEffect(() => {
    console.log("RUN");
    parseGridsString();
    parseGridOptions();
  }, []);

  return <Container {...parsedGrids}>{children}</Container>;
};

export { GridColumn };
