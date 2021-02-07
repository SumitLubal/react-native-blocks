import React, {ReactNode} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Block from './Block';
import ThemeContext from '../context/ThemeContext';
import {theme} from '../constants';

interface Props {
  color?: string;
  style?: ViewStyle;
  flex?: boolean;
  shadow?: boolean;
  children: ReactNode;
}

const Card = (props: Props) => {
  const {color, style, children, ...propsExtra} = props;
  let cardStyle = {...style, ...styles.card};
  return (
    <ThemeContext.Consumer>
      {({theme}) => {
        return (
          <Block
            color={color || theme.backgroundColorLite}
            style={cardStyle}
            {...propsExtra}>
            {children}
          </Block>
        );
      }}
    </ThemeContext.Consumer>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.sizes.radius,
    padding: theme.sizes.base + 4,
    marginBottom: theme.sizes.base,
  },
});

export default Card;
