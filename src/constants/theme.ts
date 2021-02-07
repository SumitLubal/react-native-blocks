const colors = {
  accent: '#F3534A',
  primary: '#0AC4BA',
  secondary: '#2BDA8E',
  background: '#1E1E1E',
  lightGreen: '#88B851',
  tertiary: '#FFE358',
  darkBlack: '#000',
  white: '#FFFFFF',
  lightWhite: '#ededed',
  gray: '#9DA3B4',
  black: '#333333',
  lightBlack: '#424242',
  gray2: '#C5CCD6',
  pink: '#f542b6',
};

const commonColors = {
  ...colors,
  accentColor: colors.accent,
  statusBarTextColor: colors.white,
  progressBarUnfilledColor: colors.white,
  progressBarFeelColor: colors.lightGreen,
};

const lightTheme = {
  ...commonColors,
  backgroundColor: colors.lightWhite,
  backgroundColorLite: colors.white,
  textColor: colors.black,
  secondaryTextColor: colors.gray,
  navBarColor: colors.accent,
  navBarTextColor: colors.white,
  navBarIconColor: colors.gray2,
};

const darkTheme = {
  ...commonColors,
  backgroundColor: colors.black,
  backgroundColorLite: colors.lightBlack,
  textColor: colors.white,
  secondaryTextColor: colors.gray2,
  navBarColor: colors.accent,
  navBarTextColor: colors.white,
  navBarIconColor: colors.gray,
};

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
};

const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  h3: {
    fontSize: sizes.h3,
  },
  header: {
    fontSize: sizes.header,
  },
  title: {
    fontSize: sizes.title,
  },
  body: {
    fontSize: sizes.body,
  },
  caption: {
    fontSize: sizes.caption,
  },
};

export {colors, sizes, fonts, lightTheme, darkTheme};
