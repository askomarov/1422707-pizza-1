// export const doughWeight = [
//   {
//     name: "Тонкое",
//     value: "light",
//     foundation: "small",
//   },
//   {
//     name: "Толстое",
//     value: "large",
//     foundation: "big",
//   },
// ];

// export const souceClassWord = [
//   {
//     name: "Сливочный",
//     foundation: "creamy",
//   },
//   {
//     name: "Томатный",
//     foundation: "tomato",
//   },
// ];

// export const doughSizes = [
//   {
//     name: "23 см",
//     value: "small",
//   },
//   {
//     name: "32 см",
//     value: "normal",
//   },
//   {
//     name: "45 см",
//     value: "big",
//   },
// ];

// export const ingredientsList = [
//   { name: "Грибы", value: "mushrooms" },
//   { name: "Чеддер", value: "cheddar" },
//   { name: "Салями", value: "salami" },
//   { name: "Ветчина", value: "ham" },
//   { name: "Ананас", value: "ananas" },
//   { name: "Бекон", value: "bacon" },
//   { name: "Лук", value: "onion" },
//   { name: "Чили", value: "chile" },
//   { name: "Халапеньо", value: "jalapeno" },
//   { name: "Маслины", value: "olives" },
//   { name: "Томаты", value: "tomatoes" },
//   { name: "Лосось", value: "salmon" },
//   { name: "Моцарелла", value: "mozzarella" },
//   { name: "Пармезан", value: "parmesan" },
//   { name: "Блю чиз", value: "blue_cheese" },
// ];

import doughClasses from "@/common/classes/doughClasses.js";
import ingredientsClasses from "@/common/classes/ingredientsClasses.js";
import saucesClasses from "@/common/classes/saucesClasses.js";
import sizesClasses from "@/common/classes/sizesClasses.js";

export const normalizePizzas = (pizzas) => {
  pizzas.dough.forEach((n) => (n.class = doughClasses[n.id]));
  pizzas.ingredients.forEach((n) => (n.class = ingredientsClasses[n.id]));
  pizzas.sauces.forEach((n) => (n.class = saucesClasses[n.id]));
  pizzas.sizes.forEach((n) => (n.class = sizesClasses[n.id]));
  return {
    ...pizzas,
  };
};
