export const filtersData = [
  {
    id: 1,
    category: "Цветы",
    filters: ["Цветы поштучно", "Цветы в корзине", "Авторские букеты"],
  },
  {
    id: 2,
    category: "Картины",
    filters: ["Абстракция", "Модерн", "Реализм"],
  },
] as const;

export type Category = (typeof filtersData)[number]["category"];

export type FilterByCategoryMap = {
  [K in Category]: Extract<
    (typeof filtersData)[number],
    { category: K }
  >["filters"][number];
};
