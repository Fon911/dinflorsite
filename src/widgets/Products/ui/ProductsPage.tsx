"use client";
import { shopsData } from "@/shared/data";
import { productsData } from "@/shared/data/products";
import Layout from "@/shared/ui/Layout";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "./Button";
import Info from "./Info";
import ProductImage from "./ProductImage";

export const ProductsPage = () => {
  const { id } = useParams();

  // Получаем продукт по id
  const product = productsData.find((p) => p.id === Number(id));

  const handleAddToFavorites = () => {
    // TODO: Добавить логику добавления в избранное
    console.log("Add to favorites", id);
  };

  const handleShare = () => {
    // TODO: Добавить логику поделиться
    navigator.clipboard.writeText(window.location.href);
  };

  const rightIcons = (
    <>
      <button
        onClick={handleAddToFavorites}
        className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <Image src="/icon/ui/like.png" alt="Избранное" width={30} height={30} />
      </button>
      <button
        onClick={handleShare}
        className="w-[30px] h-[30px] flex items-center justify-center hover:opacity-70 transition-opacity"
      >
        <Image
          src="/icon/ui/share.png"
          alt="Поделиться"
          width={24}
          height={30}
        />
      </button>
    </>
  );

  if (!product) {
    return (
      <Layout rightIcons={rightIcons}>
        <div>Продукт не найден</div>
      </Layout>
    );
  }

  return (
    <Layout rightIcons={rightIcons}>
      <div className="flex flex-row justify-between ">
        <div className="flex flex-row gap-6">
          <ProductImage product={product} />
          <Info product={product} />
        </div>
        <div className="mr-[59px]">
          <Button product={product} shopsData={shopsData} />
        </div>
      </div>
    </Layout>
  );
};
