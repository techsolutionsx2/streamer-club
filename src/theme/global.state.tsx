import { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    "#__next": {
      width: "100%",
      height: "100%",
    },
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
      margin: 0,
      padding: 0,
    },
    body: {
      scrollBehavior: "smooth",
      padding: 0,
      color: get(theme, "colors.white"),
      margin: "0 auto",
      transition: get(theme, "transition.normal"),
      fontFamily: '"Roboto" ,sans-serif !important',
      fontWeight: "500",
      fontSize: "12px",
      lineHeight: "1.5",
      backgroundColor: get(theme, "colors.black.100"),
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
      button: {
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      },
      "::-webkit-scrollbar": {
        width: "3px",
      },
      "::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 5px grey",
        borderRadius: "10px",
      },
      " ::-webkit-scrollbar-thumb": {
        background: get(theme, "colors.primary.regular"),
        borderRadius: "6px",
      },
    },
    h1: {
      fontFamily: "MartelSans",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      fontFamily: "MartelSans",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      fontFamily: "MartelSans",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      fontFamily: "MartelSans",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      fontFamily: "MartelSans",
      fontSize: "mm",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h6: {
      fontFamily: "MartelSans",
      fontSize: "MartelSans",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      fontFamily: "MartelSans",
      margin: 0,
    },
    a: {
      fontFamily: "MartelSans",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    // custom
    "#nprogress": {
      pointerEvents: "none",
    },
    "#nprogress .bar": {
      top: "0",
      left: "0",
      height: "2px",
      width: "100%",
      position: "fixed",
      zIndex: "9999",
      background: get(theme, "colors.primary.regular"),
      boxShadow: `0 0 2px ${get(theme, "colors.primary.regular")}`,
    },
    "#nprogress .peg": {
      right: "0",
      opacity: "1",
      width: "100px",
      height: "100%",
      display: "block",
      position: "absolute",
      transform: "rotate(3deg) translate(0px, -4px)",
      boxShadow: `0 0 10px ${get(
        theme,
        "colors.primary.regular"
      )}, 0 0 5px ${get(theme, "colors.primary.regular")}`,
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...theme.globals,
  })
);