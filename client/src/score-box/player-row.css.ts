import { style } from "@vanilla-extract/css";

export const PlayerRowContainer = style({
  padding: "2px 4px",
  color: "white",
  letterSpacing: "0.5px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const PlayerFlagContainer = style({
  height: "20px",
  width: "30px",
  padding: "1px",
});

export const PlayerNameContainer = style({
  margin: "0px 8px",
  width: "100px",
});
