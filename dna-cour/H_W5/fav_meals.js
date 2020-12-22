let myPar = document.querySelector("#par");

let favMeals = [
  {
    name: "Biryani",
    ingredients: ["rise", "peas", "potato", "dried currants"],
    bestTimeToEat: "lunch",
  },
  {
    name: "Indomie",
    ingredients: ["Noodles", "spices", "oil"],
    bestTimeToEat: "dinner",
  },
  {
    name: "Fried egg",
    ingredients: ["egg", "vegetable oil"],
    bestTimeToEat: "breakfast",
  },
  {
    name: "Kabbah",
    ingredients: ["god knows"],
    bestTimeToEat: "lunch",
  },
  {
    name: "burger",
    ingredients: ["lots of things"],
    bestTimeToEat: "anytime I guess",
  },
];

if (favMeals.length >= 7) {
  console.log("Food is great, isn't it?");
}

myPar.innerHTML = `${favMeals[0].name}'s First Ingredient: ${favMeals[0].ingredients[0]}`;
