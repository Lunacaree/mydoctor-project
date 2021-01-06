const mainColor = {
  green: '#0BCAD4',
  dark: '#112340',
  grey: '#7D8797',
  borderGrey: '#E9E9E9',
};

export const colors = {
  primary: mainColor.green,
  secondary: mainColor.dark,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColor.dark,
    secondary: mainColor.grey,
  },
  button: {
    primary: {
      background: mainColor.green,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColor.dark,
    },
  },
  border: mainColor.borderGrey,
};
