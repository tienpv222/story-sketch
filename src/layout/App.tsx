import { createMutable } from "solid-js/store";
import { ActionButton } from "../components/ActionButton";
import { Theme } from "../components/Theme";
import { useRecipe } from "../utils/vanilla-extract";
import { appRecipe } from "./App.css";
import IconEdit from "@adobe/spectrum-css-workflow-icons/18/Edit.svg";

export const app = createMutable({
  darkTheme: false,
});

export const App = useRecipe(appRecipe)((attrs) => {
  return (
    <Theme {...attrs}>
      <ActionButton icon={IconEdit} onClick={() => console.log("foo")} />
      <ActionButton label="Edit" />
      <ActionButton icon={IconEdit} label="Edit" />
    </Theme>
  );
});
