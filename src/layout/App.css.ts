import { theme } from "../components/Theme.css";
import { createRecipe } from "../utils/vanilla-extract";

export const appRecipe = createRecipe({
  base: {
    width: "100vw",
    height: "100vh",
    padding: theme.size[115],
    display: "flex",
    gap: theme.size[115],
  },
});
