const breakpoints = {
  mobile: "768.98px",
  tablet: "991.98px",
  desktop: "1439.98px",
  desktopFHD: "1919.98px",
  desktopQHD: "2559.98px",
  desktopUHD: "3839.99px"
};

const gridConfigs = {
  row: {
    gap: "0",
    maxWidth: breakpoints.desktopFHD
  },

  cell: {
    padding: ".5rem"
  },

  general: {
    transition: "all 150ms ease"
  },

  breakpoints
};

export { gridConfigs };
