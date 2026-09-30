export type MenuItem = {
  name: string;
  description: string;
  price: number;
  tag?: string;
};

export const menuSections: { title: string; items: MenuItem[] }[] = [
  {
    title: "A little something",
    items: [
      {
        name: "Warm marinated olives",
        description: "Citrus peel, bay, fennel seed",
        price: 9,
      },
      {
        name: "Sourdough & cultured butter",
        description: "Whipped sea salt butter, daily loaf",
        price: 12,
        tag: "A house favorite",
      },
      {
        name: "Burrata & late tomatoes",
        description: "Stone fruit, basil, grilled bread",
        price: 19,
      },
    ],
  },
  {
    title: "From the garden",
    items: [
      {
        name: "Little gem Caesar",
        description: "Anchovy dressing, sourdough crumb, pecorino",
        price: 18,
      },
      {
        name: "Charred carrots",
        description: "Green tahini, pomegranate, mint",
        price: 17,
        tag: "Plant-based",
      },
      {
        name: "Summer squash",
        description: "Corn cream, chili crisp, dill",
        price: 20,
      },
    ],
  },
  {
    title: "The good stuff",
    items: [
      {
        name: "Rigatoni alla vodka",
        description: "Slow tomato, a little cream, basil",
        price: 27,
        tag: "A house favorite",
      },
      {
        name: "Roast chicken for two",
        description: "Lemon pan jus, crispy potatoes, herbs",
        price: 58,
      },
      {
        name: "Seared market fish",
        description: "White beans, fennel, salsa verde",
        price: 34,
      },
    ],
  },
];
