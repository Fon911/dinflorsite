// src/widgets/home/ui/HomeCard.tsx
import Image from "next/image";
import Card from "./onecount/Card";

const cards = [
  { title: "Скорость", image: "/icons/speed.svg" },
  { title: "Надёжность", image: "/icons/safe.svg" },
  { title: "Поддержка", image: "/icons/support.svg" },
  { title: "Удобство", image: "/icons/ui.svg" },
  { title: "Гибкость", image: "/icons/flex.svg" },
];

export const HomeCard = () => {
  return (
    <section className="flex flex-row ">
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
      <button>
        <Image
          src="/icon/ui/homearrow.png"
          alt="arrow"
          width={44}
          height={44}
        />
      </button>
    </section>
  );
};
