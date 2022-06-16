import doughClasses from "@/common/classes/doughClasses.js";
import ingredientsClasses from "@/common/classes/ingredientsClasses.js";
import saucesClasses from "@/common/classes/saucesClasses.js";
import sizesClasses from "@/common/classes/sizesClasses.js";
import uniqueId from "lodash/uniqueId";

export const normalizePizzas = (pizzas) => {
  pizzas.dough.forEach((n) => (n.class = doughClasses[n.id]));
  pizzas.ingredients.forEach((n) => (n.class = ingredientsClasses[n.id]));
  pizzas.sauces.forEach((n) => (n.class = saucesClasses[n.id]));
  pizzas.sizes.forEach((n) => (n.class = sizesClasses[n.id]));
  return {
    ...pizzas,
  };
};

export const normalizeMisc = (misc) => {
  misc.forEach((n) => {
    n.id = uniqueId();
    n.count = 0;
  });
  return misc;
};
