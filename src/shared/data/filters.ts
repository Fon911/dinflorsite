export const filtersData = [
  {
    id: 1,
    category: "Цветы",
    categorySlug: "tsvety",
    filters: [
      { name: "Цветы поштучно", slug: "tsvety-poshtuchno" },
      { name: "Цветы в корзине", slug: "tsvety-v-korzine" },
      { name: "Авторские букеты", slug: "avtorskie-bukety" },
    ],
  },
  {
    id: 2,
    category: "Картины",
    categorySlug: "kartiny",
    filters: [
      { name: "Абстракция", slug: "abstraktsiya" },
      { name: "Модерн", slug: "modern" },
      { name: "Реализм", slug: "realizm" },
    ],
  },
] as const satisfies readonly {
  id: number;
  category: string;
  categorySlug: string;
  filters: readonly { name: string; slug: string }[];
}[];

export type Category = (typeof filtersData)[number]["category"];

export type FilterByCategoryMap = {
  [K in Category]: Extract<
    (typeof filtersData)[number],
    { category: K }
  >["filters"][number]["name"];
};
