export const compositionData = [
  { id: 1, name: "Роза" },
  { id: 2, name: "Гвоздика" },
  { id: 3, name: "Лилия" },
  { id: 4, name: "Калла" },
  { id: 5, name: "Тюльпан" },
  { id: 6, name: "Пион" },
  { id: 7, name: "Сирень" },
  { id: 8, name: "Эвкалипт" },
] as const satisfies readonly {
  id: number;
  name: string;
}[];

export type Flower = (typeof compositionData)[number];
export type FlowerName = Flower["name"];
export type FlowerId = Flower["id"];

// Тип для композиции с количеством
export type CompositionItem = {
  name: FlowerName;
  count: number;
};

export type Composition = CompositionItem[];
