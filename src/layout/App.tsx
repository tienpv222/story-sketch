import { createMutable } from "solid-js/store";
import { CheckboxDemo } from "../components/Checkbox";
import { APP } from "./App.css";

export const app = createMutable({
  darkTheme: false,
});

export const App = () => {
  return (
    <div class={APP.ROOT} use:theme={{ color: "light" }}>
      <CheckboxDemo />
    </div>
  );
};
