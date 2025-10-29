/**
 * Преобразует строку в SEO-friendly slug
 * @param text - Текст для преобразования
 * @returns SEO-friendly slug
 */
export function slugify(text: string): string {
  const translitMap: { [key: string]: string } = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "e",
    ж: "zh", з: "z", и: "i", й: "y", к: "k", л: "l", м: "m",
    н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u",
    ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
    ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
  };

  return text
    .toLowerCase()
    .split("")
    .map((char) => translitMap[char] || char)
    .join("")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Генерирует SEO-friendly URL для фильтра
 * @param category - Категория товара
 * @param filter - Название фильтра
 * @returns SEO-friendly URL
 */
export function generateFilterUrl(category: string, filter: string): string {
  const categorySlug = slugify(category);
  const filterSlug = slugify(filter);
  return `/catalog/${categorySlug}/${filterSlug}`;
}

/**
 * Генерирует Title для страницы фильтра
 * @param category - Категория товара
 * @param filter - Название фильтра
 * @param city - Город
 * @returns SEO Title
 */
export function generateFilterTitle(
  category: string,
  filter: string,
  city: string = "Калуге"
): string {
  return `Купить ${filter} ${category} в ${city} — цены, фото, отзывы`;
}

/**
 * Генерирует Description для страницы фильтра
 * @param category - Категория товара
 * @param filter - Название фильтра
 * @param city - Город
 * @returns SEO Description
 */
export function generateFilterDescription(
  category: string,
  filter: string,
  city: string = "Калуге"
): string {
  return `${filter} ${category} в ${city}. Широкий ассортимент, выгодные цены, быстрая доставка. Закажите с доставкой на дом!`;
}
