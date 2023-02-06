import { style } from "@vanilla-extract/css";
import "./app.css";
import { ScoreBox } from "./score-box/score-box";

export function App() {
  return (
    <div>
      <ScoreBox />
    </div>
  );
}
