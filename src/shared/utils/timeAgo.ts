/**
 * Вычисляет сколько времени прошло с указанной даты
 * @param date - дата создания отзыва
 * @returns строка вида "Сегодня", "Вчера", "3 дня назад" и т.д.
 */
export const getTimeAgo = (date: Date): string => {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "Сегодня";
  if (diffDays === 1) return "Вчера";
  if (diffDays < 7) return `${diffDays} ${getDayText(diffDays)} назад`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${getWeekText(weeks)} назад`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${getMonthText(months)} назад`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} ${getYearText(years)} назад`;
};

/**
 * Получает правильное склонение для слова "день"
 */
const getDayText = (days: number): string => {
  const lastDigit = days % 10;
  const lastTwoDigits = days % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "дней";
  }
  if (lastDigit === 1) {
    return "день";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "дня";
  }
  return "дней";
};

/**
 * Получает правильное склонение для слова "неделя"
 */
const getWeekText = (weeks: number): string => {
  const lastDigit = weeks % 10;
  const lastTwoDigits = weeks % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "недель";
  }
  if (lastDigit === 1) {
    return "неделю";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "недели";
  }
  return "недель";
};

/**
 * Получает правильное склонение для слова "месяц"
 */
const getMonthText = (months: number): string => {
  const lastDigit = months % 10;
  const lastTwoDigits = months % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "месяцев";
  }
  if (lastDigit === 1) {
    return "месяц";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "месяца";
  }
  return "месяцев";
};

/**
 * Получает правильное склонение для слова "год"
 */
const getYearText = (years: number): string => {
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return "лет";
  }
  if (lastDigit === 1) {
    return "год";
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return "года";
  }
  return "лет";
};
