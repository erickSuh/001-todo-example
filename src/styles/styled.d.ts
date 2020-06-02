import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    font: {
      family: string;
      size: string;
    };
    colors: {
      customProp?: string;
      primary: string;
      secundary: string;
      danger: string;
      success: string;
      info: string;
      warning: string;

      background: string;
      text: string;
    };
  }
}
