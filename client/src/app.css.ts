import { fontFace, globalStyle } from "@vanilla-extract/css";

// Fonts
export const RobotoFont = fontFace({
  fontStyle: "normal",
  fontWeight: 400,
  src: "url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.woff2) format('woff2')",
});

// Global Styles
globalStyle("body", {
  margin: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.8)",
  backgroundImage: `url(./default-bg.jpg)`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
});

globalStyle(":root", {
  fontFamily: "'Roboto', sans-serif",
  fontSynthesis: "none",
  textRendering: "optimizeLegibility",
  fontSmooth: "always",
});
