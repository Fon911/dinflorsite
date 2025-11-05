/**
 * Конвертирует дни в годы и месяцы
 * @param days - количество дней
 * @returns строка вида "1 год 2 месяца"
 */
export const convertDaysToYearsAndMonths = (days: number): string => {
  const years = Math.floor(days / 365);
  const remainingDays = days % 365;
  const months = Math.floor(remainingDays / 30);

  const yearText = getYearText(years);
  const monthText = getMonthText(months);

  if (years > 0 && months > 0) {
    return `${years} ${yearText} ${months} ${monthText}`;
  } else if (years > 0) {
    return `${years} ${yearText}`;
  } else if (months > 0) {
    return `${months} ${monthText}`;
  } else {
    return `${days} ${getDayText(days)}`;
  }
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
 * Определяет цвет для карточки "заказов вовремя" в зависимости от процента
 * @param percentage - процент заказов вовремя
 * @returns hex цвет
 */
export const getOrderInTimeColor = (percentage: number): string => {
  if (percentage >= 95) {
    return "#4CAF50"; // зеленый
  } else if (percentage >= 80) {
    return "#FFC107"; // желтый
  } else {
    return "#FF4681"; // красный
  }
};

/**
 * Форматирует число с пробелами (например, 1000000 -> "1 000 000")
 */
export const formatNumberWithSpaces = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
