import { style } from "@vanilla-extract/css";

export const ScoreBoxOuterContainer = style({
  position: "absolute",
  bottom: "50px",
  left: "100px",
  padding: "4px",

  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "4px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
});

export const ContainerHorizontalBorder = style({
  width: "10px",
  backgroundColor: "rgb(0,27,46)",
  background:
    "linear-gradient(0deg, rgba(0,27,46,1) 0%, rgba(15,64,89,1) 50%, rgba(0,27,46,1) 100%)",
});

export const ScoreBoxInnerContainer = style({
  background: "#000d11",
});

export const PlayerRowDivider = style({
  height: "2px",
  backgroundColor: "rgb(0,10,16)",
  background:
    "linear-gradient(90deg, rgba(0,10,25,1) 0%, rgba(58,67,71,1) 70%, rgba(0,10,25,1) 100%)",
});

export const GameContainer = style({
  width: "20px",
});
