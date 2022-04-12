import { createMutable } from "solid-js/store";
import { Checkbox } from "../components/Checkbox";
import { APP } from "./App.css";

export const app = createMutable({
  darkTheme: false,
});

export const App = () => {
  return (
    <div class={APP} use:theme={{ color: "light" }}>
      <Checkbox label="Checkbox" />
      <Checkbox label="Checkbox" indeterminate />
    </div>
  );
};
