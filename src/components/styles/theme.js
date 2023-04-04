const breakpoint = {
  desktop: 1024,
  tablet: 1023,
  tabletPortrait: 771,
  mobile: 358,
};

const device = {
  desktop: `screen and (min-width:${breakpoint.desktop}px)`,
  tablet: `screen and (max-width:${breakpoint.tablet}px)`,
  tabletPortrait: `screen and (max-width:${breakpoint.tabletPortrait}px)`,
  mobile: `screen and (max-width:${breakpoint.mobile}px)`,
};
const theme = {
  device,
};
export default theme;
// ThemeProvider
