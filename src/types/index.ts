export interface TypeCard {
  index: number;
  title: string;
  text: string;
  status: number;
}

export interface TypeOption {
  value: number;
  label: string;
}

export interface ICustomColorTheme {
  customColor?: string;
  theme: {
    font: {
      family: string;
      size: string;
    };
    colors: {
      title: string;
      primary: string;
      secundary: string;
      danger: string;
      success: string;
      info: string;
      warning: string;

      background: string;
      text: string;
    };
  };
}
