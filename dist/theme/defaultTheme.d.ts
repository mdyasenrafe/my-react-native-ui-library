import { TextStyle } from "react-native";
export declare const theme: {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        error: string;
        onPrimary: string;
        onSecondary: string;
        onBackground: string;
        onSurface: string;
        onError: string;
    };
    spacing: {
        xs: number;
        s: number;
        m: number;
        l: number;
        xl: number;
        xxl: number;
    };
    borderRadii: {
        s: number;
        m: number;
        l: number;
        xl: number;
    };
    textVariants: {
        header: {
            fontSize: number;
            fontWeight: TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: TextStyle["fontWeight"];
            color: string;
        };
        body: {
            fontSize: number;
            color: string;
        };
        caption: {
            fontSize: number;
            color: string;
        };
        button: {
            fontSize: number;
            fontWeight: TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
};
export type defaultTheme = typeof theme;
