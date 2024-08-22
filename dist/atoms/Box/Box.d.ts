import React from "react";
import type { BoxProps as RestyleBoxProps } from "@shopify/restyle";
import { defaultTheme } from "../../theme";
export type BoxProps = RestyleBoxProps<defaultTheme> & {
    children?: React.ReactNode;
};
export declare const Box: React.ForwardRefExoticComponent<import("@shopify/restyle").BackgroundColorProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & import("@shopify/restyle").OpacityProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & import("@shopify/restyle").VisibleProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & import("@shopify/restyle").LayoutProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & import("@shopify/restyle").SpacingProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & {
    borderBottomWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderLeftWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderRightWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderStyle?: import("@shopify/restyle").ResponsiveValue<"solid" | "dotted" | "dashed" | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderTopWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderStartWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderEndWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    borderWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
} & {
    borderColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderTopColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderRightColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderLeftColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderBottomColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderStartColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderEndColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
} & {
    borderRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderBottomLeftRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderBottomRightRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderTopLeftRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderTopRightRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderBottomStartRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderBottomEndRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderTopStartRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
    borderTopEndRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
        phone: number;
        tablet: number;
    }> | undefined;
} & {
    shadowOpacity?: import("@shopify/restyle").ResponsiveValue<import("react-native").AnimatableNumericValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    shadowOffset?: import("@shopify/restyle").ResponsiveValue<Readonly<{
        width: number;
        height: number;
    }> | undefined, {
        phone: number;
        tablet: number;
    }>;
    shadowRadius?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
    elevation?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
        phone: number;
        tablet: number;
    }>;
} & {
    shadowColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
        phone: number;
        tablet: number;
    }> | undefined;
} & {
    position?: import("@shopify/restyle").ResponsiveValue<"absolute" | "relative" | "static" | undefined, {
        phone: number;
        tablet: number;
    }>;
    top?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    right?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    bottom?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    left?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    start?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
    end?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
        phone: number;
        tablet: number;
    }>;
} & {
    zIndex?: import("@shopify/restyle").ResponsiveValue<number, {
        phone: number;
        tablet: number;
    }> | undefined;
} & import("@shopify/restyle").SpacingShorthandProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & import("@shopify/restyle").BackgroundColorShorthandProps<{
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
        subheader: {
            fontSize: number;
            fontWeight: import("react-native").TextStyle["fontWeight"];
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
            fontWeight: import("react-native").TextStyle["fontWeight"];
            color: string;
        };
    };
    breakpoints: {
        phone: number;
        tablet: number;
    };
}> & Omit<import("react-native").ViewProps & {
    children?: React.ReactNode;
}, "width" | "height" | "minWidth" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "marginStart" | "marginEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "paddingStart" | "paddingEnd" | "columnGap" | "rowGap" | "gap" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderStartWidth" | "borderEndWidth" | "borderWidth" | "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderStartColor" | "borderEndColor" | "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomStartRadius" | "borderBottomEndRadius" | "borderTopStartRadius" | "borderTopEndRadius" | "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation" | "position" | "top" | "right" | "bottom" | "left" | "start" | "end" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg" | "bg" | "backgroundColor" | "opacity" | "visible" | "shadowColor" | "zIndex"> & React.RefAttributes<unknown>> & {
    defaultProps?: Partial<import("@shopify/restyle").BackgroundColorProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & import("@shopify/restyle").OpacityProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & import("@shopify/restyle").VisibleProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & import("@shopify/restyle").LayoutProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & import("@shopify/restyle").SpacingProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & {
        borderBottomWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderLeftWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderRightWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderStyle?: import("@shopify/restyle").ResponsiveValue<"solid" | "dotted" | "dashed" | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderTopWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderStartWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderEndWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        borderWidth?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
    } & {
        borderColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderTopColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderRightColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderLeftColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderBottomColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderStartColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderEndColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
    } & {
        borderRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderBottomLeftRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderBottomRightRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderTopLeftRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderTopRightRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderBottomStartRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderBottomEndRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderTopStartRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
        borderTopEndRadius?: import("@shopify/restyle").ResponsiveValue<"m" | "s" | "l" | "xl", {
            phone: number;
            tablet: number;
        }> | undefined;
    } & {
        shadowOpacity?: import("@shopify/restyle").ResponsiveValue<import("react-native").AnimatableNumericValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        shadowOffset?: import("@shopify/restyle").ResponsiveValue<Readonly<{
            width: number;
            height: number;
        }> | undefined, {
            phone: number;
            tablet: number;
        }>;
        shadowRadius?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
        elevation?: import("@shopify/restyle").ResponsiveValue<number | undefined, {
            phone: number;
            tablet: number;
        }>;
    } & {
        shadowColor?: import("@shopify/restyle").ResponsiveValue<"onBackground" | "onSurface" | "onPrimary" | "primary" | "secondary" | "background" | "surface" | "error" | "onSecondary" | "onError", {
            phone: number;
            tablet: number;
        }> | undefined;
    } & {
        position?: import("@shopify/restyle").ResponsiveValue<"absolute" | "relative" | "static" | undefined, {
            phone: number;
            tablet: number;
        }>;
        top?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        right?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        bottom?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        left?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        start?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
        end?: import("@shopify/restyle").ResponsiveValue<import("react-native").DimensionValue | undefined, {
            phone: number;
            tablet: number;
        }>;
    } & {
        zIndex?: import("@shopify/restyle").ResponsiveValue<number, {
            phone: number;
            tablet: number;
        }> | undefined;
    } & import("@shopify/restyle").SpacingShorthandProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & import("@shopify/restyle").BackgroundColorShorthandProps<{
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
            subheader: {
                fontSize: number;
                fontWeight: import("react-native").TextStyle["fontWeight"];
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
                fontWeight: import("react-native").TextStyle["fontWeight"];
                color: string;
            };
        };
        breakpoints: {
            phone: number;
            tablet: number;
        };
    }> & Omit<import("react-native").ViewProps & {
        children?: React.ReactNode;
    }, "width" | "height" | "minWidth" | "maxWidth" | "minHeight" | "maxHeight" | "overflow" | "aspectRatio" | "alignContent" | "alignItems" | "alignSelf" | "justifyContent" | "flex" | "flexBasis" | "flexDirection" | "flexGrow" | "flexShrink" | "flexWrap" | "margin" | "marginTop" | "marginRight" | "marginBottom" | "marginLeft" | "marginHorizontal" | "marginVertical" | "marginStart" | "marginEnd" | "padding" | "paddingTop" | "paddingRight" | "paddingBottom" | "paddingLeft" | "paddingHorizontal" | "paddingVertical" | "paddingStart" | "paddingEnd" | "columnGap" | "rowGap" | "gap" | "borderBottomWidth" | "borderLeftWidth" | "borderRightWidth" | "borderStyle" | "borderTopWidth" | "borderStartWidth" | "borderEndWidth" | "borderWidth" | "borderColor" | "borderTopColor" | "borderRightColor" | "borderLeftColor" | "borderBottomColor" | "borderStartColor" | "borderEndColor" | "borderRadius" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderBottomStartRadius" | "borderBottomEndRadius" | "borderTopStartRadius" | "borderTopEndRadius" | "shadowOpacity" | "shadowOffset" | "shadowRadius" | "elevation" | "position" | "top" | "right" | "bottom" | "left" | "start" | "end" | "m" | "mt" | "mr" | "mb" | "ml" | "mx" | "my" | "ms" | "me" | "p" | "pt" | "pr" | "pb" | "pl" | "px" | "py" | "ps" | "pe" | "g" | "rg" | "cg" | "bg" | "backgroundColor" | "opacity" | "visible" | "shadowColor" | "zIndex"> & React.RefAttributes<unknown>> | undefined;
};
