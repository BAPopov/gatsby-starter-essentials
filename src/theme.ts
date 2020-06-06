const minWidthMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`;

const maxWidthMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const breakpoints = {
  xs: 600,
  sm: 960,
  md: 1280,
  lg: 1920,
  xl: 1921
};

const theme = {
  breakpoints: {
    xs: maxWidthMediaQuery(breakpoints.xs),
    sm: maxWidthMediaQuery(breakpoints.sm),
    md: maxWidthMediaQuery(breakpoints.md),
    lg: maxWidthMediaQuery(breakpoints.lg),
    xl: minWidthMediaQuery(breakpoints.xl)
  }
};

export default theme;
