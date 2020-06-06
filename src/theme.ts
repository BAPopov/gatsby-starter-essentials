const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  xs: customMediaQuery(600),
  sm: customMediaQuery(960),
  md: customMediaQuery(1280),
  lg: customMediaQuery(1920),
  xl: customMediaQuery(3840)
};

const Theme = {
  borderRadius: '5px',
  colors: {
    primary: 'cyan',
    secondary: 'magenta'
  },
  breakpoints: {
    xs: media.xs,
    sm: media.sm,
    md: media.md,
    lg: media.lg,
    xl: media.xl
  }
};

export default Theme;
