export type Styles = {
  button: string;
  chevron: string;
  large: string;
  medium: string;
  primary: string;
  secondary: string;
  small: string;
  tertiary: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
