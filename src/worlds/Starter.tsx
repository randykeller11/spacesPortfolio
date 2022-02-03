import { StandardEnvironment } from "spacesvr";
import Home from "../scenes/Home";

export default function Starter() {
  return (
    <StandardEnvironment>
      <Home />
    </StandardEnvironment>
  );
}
