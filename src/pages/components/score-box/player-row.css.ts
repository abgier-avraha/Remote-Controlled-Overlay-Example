import { keyframes, style } from "@vanilla-extract/css";

export const PlayerRowContainer = style({
  padding: "2px 4px",
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

const widen = keyframes({
  "0%": {
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
  animationName: widen,
  animationDuration: "0.3s",
  animationTimingFunction: "ease-in-out",
  textAlign: "center",
  overflow: "hidden",
});

export const PointsContainer = style({
  width: "35px",
  transition: "width 0.3s ease-in-out",
  textAlign: "center",
  background: "white",
  color: "black",
  boxShadow: "inset 0 5px 10px rgba(0,0,0,0.25)",
  borderRadius: "2px",
  overflow: "hidden",
});

export const PointsContainerEmpty = style({
  width: "0px",
  color: "rgba(0,0,0,0)",
});
