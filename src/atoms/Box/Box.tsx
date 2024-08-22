import React from "react";
import { createBox } from "@shopify/restyle";
import type { BoxProps as RestyleBoxProps } from "@shopify/restyle";
import { defaultTheme } from "../../theme";

export type BoxProps = RestyleBoxProps<defaultTheme> & {
  children?: React.ReactNode;
};

export const Box = createBox<defaultTheme>();
