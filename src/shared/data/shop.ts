export interface Shop {
  id: number;
  ShopImage: string;
  ShopName: string;
  DeliveryTime: string;
  Rating: number;
  ReviewsCount: number;
  description: string;
  ShopCoverImage: {
    main: string;
    others: [string?, string?]; // максимум 2 изображения
  };
  SoldCount: number;
  DaySet: number;
  OrderInTime: number;
  TopShop: boolean;
}

export const shopsData: Shop[] = [
  {
    id: 1,
    ShopImage: "/test/Luna.png",
    ShopName: "Цветочный рай",
    DeliveryTime: "30-60 минут",
    Rating: 4.87,
    ReviewsCount: 1250,
    description:
      "Цветочная студия Lunadddd - это про красоту и нежность в каждом цветке. Эксклюзивные сборные и моно-букеты ,цветочные композиции в коробках и корзинах , широкий ассортимент мягких игрушек.",
    ShopCoverImage: {
      main: "/test/Luna.png", // основное изображение
      others: ["/test/Luna.png", "/test/Luna.png"], // побочные изображения
    },
    SoldCount: 1200,
    DaySet: 470,
    OrderInTime: 90,
    TopShop: false,
  },
  {
    id: 2,
    ShopImage: "/test/Luna.png",
    ShopName: "Букет мечты",
    DeliveryTime: "45-75 минут",
    Rating: 4.92,
    ReviewsCount: 890,
    description:
      "Цветочная студия Lunasdas - это про красоту и нежность в каждом цветке. Эксклюзивные сборные и моно-букеты ,цветочные композиции в коробках и корзинах , широкий ассортимент мягких игрушек.",
    ShopCoverImage: {
      main: "/test/Luna.png", // основное изображение
      others: ["/test/Luna.png", "/test/Luna.png"], // побочные изображения
    },
    SoldCount: 121400,
    DaySet: 900,
    OrderInTime: 90,
    TopShop: true,
  },
  {
    ShopImage: "/test/Luna.png",
    id: 3,
    ShopName: "Арт Флора",
    DeliveryTime: "20-40 минут",
    Rating: 4.78,
    ReviewsCount: 1580,
    description:
      "Цветочная студия Luna www- это про красоту и нежность в каждом цветке. Эксклюзивные сборные и моно-букеты ,цветочные композиции в коробках и корзинах , широкий ассортимент мягких игрушек.",
    ShopCoverImage: {
      main: "/test/Luna.png", // основное изображение
      others: ["/test/Luna.png", "/test/Luna.png"], // побочные изображения
    },
    SoldCount: 125000,
    DaySet: 900,
    OrderInTime: 90,
    TopShop: true,
  },
];
