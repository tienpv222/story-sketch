import { recipe } from "@vanilla-extract/recipes";
import {
  PatternOptions,
  RuntimeFn,
  VariantGroups,
  VariantSelection,
} from "@vanilla-extract/recipes/dist/declarations/src/types";
import {
  Component,
  ComponentProps,
  createComponent,
  JSX,
  mergeProps,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

export const createRecipe = <Variants extends VariantGroups>(
  options: PatternOptions<Variants>
) => {
  return {
    variantNames: Object.keys(options.variants ?? {}),
    style: recipe(options),
  };
};

export const useRecipe = <Variants extends VariantGroups>(options: {
  variantNames: string[];
  style: RuntimeFn<Variants>;
}) => {
  const { variantNames, style } = options;

  return <T extends keyof JSX.IntrinsicElements | Component<any>>(
    component: T
  ) => {
    return (props: ComponentProps<T> & VariantSelection<Variants>) => {
      const [variants, toForwards] = splitProps(props, variantNames);

      return createComponent(
        Dynamic,
        mergeProps(toForwards, {
          component,
          get classList() {
            return {
              ...props.classList,
              [style(variants)]: true,
            };
          },
        })
      );
    };
  };
};
