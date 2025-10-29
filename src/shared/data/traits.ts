export const traitsData = [
  { id: 1, name: "Хит" },
  { id: 2, name: "Уже собран" },
  { id: 3, name: "В топ 100" },
  { id: 4, name: "Новинка" },
  { id: 5, name: "Скидка" },
] as const;

export type Trait = (typeof traitsData)[number];
export type TraitId = Trait["id"];
