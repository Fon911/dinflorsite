"use client";
import { ProductImage } from "@/entities/product/ui/ProductImage";
import { ProductInfo } from "@/entities/product/ui/ProductInfo";
import { Reviews } from "@/entities/review";
import { SimilarProducts } from "@/features/similar-products";
import { shopsData } from "@/shared/data";
import { productsData } from "@/shared/data/products";
import Layout from "@/shared/ui/Layout";
import Image from "next/image";
import { useParams } from "next/navigation";
import About from "./About";
import PurchaseButton from "./PurchaseButton";
import ProductPageMobile from "./ProductPageMobile";

export const ProductPage = () => {
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
    <div>
      <div className="hidden lg:block ">
        <Layout rightIcons={rightIcons}>
          <div className="flex flex-col">
            <div className="flex flex-row justify-between gap-6">
              <div className="flex flex-row gap-6 flex-1 min-w-0">
                <ProductImage product={product} />
                <ProductInfo product={product} />
              </div>
              <div className="flex-shrink-0">
                <PurchaseButton product={product} shopsData={shopsData} />
              </div>
            </div>
            <Reviews productId={product.id} />

            <SimilarProducts
              currentProduct={product}
              allProducts={productsData}
            />
            <About />
          </div>
        </Layout>
      </div>
      <div className="lg:hidden">
        <ProductPageMobile product={product} />
      </div>
    </div>
  );
};
