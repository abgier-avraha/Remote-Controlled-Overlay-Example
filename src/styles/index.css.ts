import { style } from "@vanilla-extract/css";
import defaultBgJPG from "../assets/default-bg.jpg";

export const Container = style({
  background: "rgba(0, 0, 0, 0.8)",
  backgroundImage: `url(${defaultBgJPG.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh",
});
