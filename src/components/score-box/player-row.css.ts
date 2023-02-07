import { keyframes, style } from "@vanilla-extract/css";

export const PlayerRowContainer = style({
  padding: "4px",
  color: "white",
  letterSpacing: "0.5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  fontSize: "20px",
  fontWeight: "700",
});

export const PlayerFlagContainer = style({
  height: "20px",
  width: "25px",
});

export const PlayerNameContainer = style({
  margin: "0px 8px",
  width: "100px",
});

const fadeInWiden = keyframes({
  "0%": {
    opacity: 0,
    maxWidth: "0px",
  },
  "20%": {
    opacity: 0,
    maxWidth: "0px",
  },
  "100%": {
    opacity: 1,
    maxWidth: "35px",
  },
});

export const GamePointsContainer = style({
  width: "35px",
  animationName: fadeInWiden,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
  textAlign: "center",
  overflow: "hidden",
});

export const PointsContainer = style({
  animationName: fadeInWiden,
  animationDuration: "0.5s",
  animationTimingFunction: "ease-in-out",
  opacity: 1,
  width: "35px",
  transition: "width 0.3s ease-in-out, opacity 0.3s ease-in-out",
  textAlign: "center",
  background: "white",
  color: "black",
  boxShadow: "inset 0 5px 10px rgba(0,0,0,0.25)",
  borderRadius: "2px",
  overflow: "hidden",
});

export const PointsContainerEmpty = style({
  opacity: 0,
  width: "0px",
  color: "rgba(0,0,0,0)",
});
