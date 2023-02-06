import { style } from "@vanilla-extract/css";

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
