import { ProductData } from "../data/products";

/**
 * Функция для подбора похожих товаров по нескольким критериям
 * Критерии в порядке важности:
 * 1. Состав (composition)
 * 2. Фильтр (filter)
 * 3. Категория (category)
 * 4. Трейты (traits)
 * 5. Цена (cost)
 */
export function getSimilarProducts(
  currentProduct: ProductData,
  allProducts: ProductData[],
  limit: number = 20
): ProductData[] {
  // Исключаем текущий товар
  const otherProducts = allProducts.filter((p) => p.id !== currentProduct.id);

  // Рассчитываем похожесть для каждого товара
  const productsWithScore = otherProducts.map((product) => {
    let score = 0;

    // 1. Состав (максимум 50 баллов)
    if (currentProduct.composition && product.composition) {
      const currentFlowers = currentProduct.composition.map((c) => c.name);
      const productFlowers = product.composition.map((c) => c.name);
      const commonFlowers = currentFlowers.filter((f) =>
        productFlowers.includes(f)
      );
      score += (commonFlowers.length / currentFlowers.length) * 50;
    }

    // 2. Фильтр (30 баллов если совпадает)
    if (currentProduct.filter === product.filter) {
      score += 30;
    }

    // 3. Категория (20 баллов если совпадает)
    if (currentProduct.category === product.category) {
      score += 20;
    }

    // 4. Трейты (максимум 30 баллов)
    if (currentProduct.traits && product.traits) {
      const commonTraits = currentProduct.traits.filter((t) =>
        product.traits?.includes(t)
      );
      score += (commonTraits.length / currentProduct.traits.length) * 30;
    }

    // 5. Цена (максимум 20 баллов - чем ближе, тем больше)
    const priceDiff = Math.abs(currentProduct.cost - product.cost);
    const maxPriceDiff = currentProduct.cost * 0.5; // 50% от цены
    const priceScore = Math.max(
      0,
      20 * (1 - priceDiff / maxPriceDiff)
    );
    score += priceScore;

    return { product, score };
  });

  // Сортируем по убыванию похожести и возвращаем топ товаров
  return productsWithScore
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.product);
}
