"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
exports.theme = {
    colors: {
        primary: "#6200ee",
        secondary: "#03dac6",
        background: "#ffffff",
        surface: "#f5f5f5",
        error: "#b00020",
        onPrimary: "#ffffff",
        onSecondary: "#000000",
        onBackground: "#000000",
        onSurface: "#000000",
        onError: "#ffffff",
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
        xxl: 40,
    },
    borderRadii: {
        s: 4,
        m: 8,
        l: 16,
        xl: 32,
    },
    textVariants: {
        header: {
            fontSize: 34,
            fontWeight: "bold",
            color: "onBackground",
        },
        subheader: {
            fontSize: 28,
            fontWeight: "600",
            color: "onBackground",
        },
        body: {
            fontSize: 16,
            color: "onBackground",
        },
        caption: {
            fontSize: 12,
            color: "onSurface",
        },
        button: {
            fontSize: 16,
            fontWeight: "600",
            color: "onPrimary",
        },
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
};
