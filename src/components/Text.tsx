// just copy this code from the driving repo :)
import React, {ReactNode} from 'react';
import {Text, StyleSheet, Platform} from 'react-native';
import ThemeContext from '../context/ThemeContext';
import {theme} from '../constants';

const weightNames = [
  'normal',
  'bold',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
] as const;
type FontWeightType = typeof weightNames[number];

interface Props {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  title?: boolean;
  body?: boolean;
  caption?: boolean;
  small?: boolean;
  size?: number;
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: string;
  // styling
  underline?: boolean;
  regular?: boolean;
  bold?: boolean;
  semibold?: boolean;
  stretch?: boolean;
  medium?: boolean;
  weight?: FontWeightType;
  center?: boolean;
  right?: boolean;
  spacing?: number;
  light?: boolean;
  height?: number;
  // colors
  color?: string;
  accent?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  black?: boolean;
  white?: boolean;
  gray?: boolean;
  gray2?: boolean;
  style?: any;
  children?: ReactNode;
}

const Typography = (props: Props) => {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    size,
    transform,
    align,
    // styling
    underline,
    regular,
    bold,
    semibold,
    stretch,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    gray2,
    style,
    children,
    ...propsExtra
  } = props;

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    underline && {textDecorationLine: 'underline'},
    bold && styles.bold,
    semibold && styles.semibold,
    stretch && {alignSelf: 'stretch'},
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && {color},
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style, // rewrite predefined styles
  ];

  return (
    <ThemeContext.Consumer>
      {({theme}) => {
        let style = textStyles;
        if (!color) {
          style = [...textStyles, {color: theme.textColor}];
        }
        return (
          <Text style={style} {...propsExtra}>
            {children}
          </Text>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: theme.sizes.font,
    color: theme.colors.black,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  accent: {color: theme.colors.accent},
  primary: {color: theme.colors.primary},
  secondary: {color: theme.colors.secondary},
  tertiary: {color: theme.colors.tertiary},
  black: {color: theme.colors.black},
  white: {color: theme.colors.white},
  gray: {color: theme.colors.gray},
  gray2: {color: theme.colors.gray2},
  // fonts
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  h3: theme.fonts.h3,
  title: theme.fonts.title,
  body: theme.fonts.body,
  caption: theme.fonts.caption,
});

export default Typography;
