const breakpoint = {
  desktop: 1281,
  tablet: 1280,
  tabletPortrait: 980,
  mobile: 575,
};

const device = {
  desktop: `screen and (min-width:${breakpoint.desktop}px)`,
  tablet: `screen and (max-width:${breakpoint.tablet}px)`,
  tabletPortrait: `screen and (max-width:${breakpoint.tabletPortrait}px)`,
  mobile: `screen and (max-width:${breakpoint.mobile}px)`,
};

const color = {
  border: "1px solid rgba(160,160,160,0.3)",
  pointColor: "#2ebaae",
};

const flexBox = {
  flex: (direction = "row", align = "center", justify = "start") => `
  display:flex; 
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  `,
};
const text = {
  overflow: (short = 1) => `
  display: -webkit-box;
  -webkit-line-clamp: ${short};
  -webkit-box-orient: vertical;
  overflow: hidden;`,
};

const theme = {
  device,
  color,
  flexBox,
  text,
};
export default theme;
