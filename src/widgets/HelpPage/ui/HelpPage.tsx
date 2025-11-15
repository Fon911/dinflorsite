"use client";
import Layout from "@/shared/ui/Layout";
import { useState, useMemo } from "react";

// Типы
interface Question {
  id: string;
  question: string;
  answer: string;
}

interface Category {
  id: string;
  name: string;
  questions: Question[];
}

// Моковые данные для ПОКУПАТЕЛЕЙ
const buyersData: Category[] = [
  {
    id: "frequent",
    name: "Частые вопросы",
    questions: [
      {
        id: "frequent-1",
        question: "Как оформить заказ?",
        answer:
          "Выберите понравившийся товар, добавьте в корзину, заполните форму с адресом доставки и выберите способ оплаты. После подтверждения заказа вы получите SMS с номером заказа.",
      },
      {
        id: "frequent-2",
        question: "Какие сроки доставки?",
        answer:
          "Стандартная доставка по городу занимает от 90 до 180 минут с момента оформления заказа. Возможна срочная доставка за 60 минут с дополнительной оплатой.",
      },
      {
        id: "frequent-3",
        question: "Как можно оплатить заказ?",
        answer:
          "Мы принимаем оплату банковской картой онлайн, через систему быстрых платежей, SberPay, а также наличными при получении заказа.",
      },
      {
        id: "frequent-4",
        question: "Можно ли отменить или изменить заказ?",
        answer:
          "Да, вы можете изменить или отменить заказ в течение 15 минут после оформления, связавшись с нами по телефону или в чате поддержки.",
      },
      {
        id: "frequent-5",
        question: "Что делать если заказ не привезли?",
        answer:
          "Свяжитесь с нами по телефону горячей линии 8-800-XXX-XX-XX или в чате поддержки. Мы разберемся в ситуации и решим проблему в кратчайшие сроки.",
      },
    ],
  },
  {
    id: "payment",
    name: "Оплата заказа",
    questions: [
      {
        id: "payment-1",
        question: "Как можно оплатить заказ?",
        answer:
          "Если карта выпущена в России и оплата в рублях, используйте любой удобный способ: банковская карта онлайн; система быстрых платежей; SberPay. Мы не храним в базе данные карт, используем платежные системы CloudPayments и Payselection.",
      },
      {
        id: "payment-2",
        question: "Если я отменил заказ, когда мне вернут деньги?",
        answer:
          "Деньги возвращаются автоматически в течение 5-10 рабочих дней в зависимости от вашего банка. Средства поступят на ту же карту, с которой была произведена оплата.",
      },
      {
        id: "payment-3",
        question: "Можно ли оплатить заказ иностранной картой?",
        answer:
          "Да, мы принимаем карты международных платежных систем Visa, Mastercard и МИР. Все транзакции защищены по стандарту PCI DSS.",
      },
      {
        id: "payment-4",
        question: "Подарочный сертификат",
        answer:
          "Вы можете приобрести подарочный сертификат любого номинала от 1000 рублей. Сертификат действует 1 год с момента покупки и может быть использован для оплаты любых товаров.",
      },
      {
        id: "payment-5",
        question: "Можно ли оплатить заказ наличными?",
        answer:
          "Да, оплата наличными доступна при получении заказа. Курьер примет оплату и выдаст чек.",
      },
    ],
  },
  {
    id: "delivery",
    name: "Доставка",
    questions: [
      {
        id: "delivery-1",
        question: "Какие сроки доставки?",
        answer:
          "Стандартная доставка по городу занимает от 90 до 180 минут с момента оформления заказа. Возможна срочная доставка за 60 минут.",
      },
      {
        id: "delivery-2",
        question: "Сколько стоит доставка?",
        answer:
          "Стоимость доставки зависит от района и составляет от 200 до 500 рублей. При заказе от 3000 рублей доставка бесплатная.",
      },
      {
        id: "delivery-3",
        question: "Можно ли выбрать время доставки?",
        answer:
          "Да, вы можете указать желаемое время доставки при оформлении заказа. Мы постараемся доставить точно в срок.",
      },
      {
        id: "delivery-4",
        question: "Доставка за город",
        answer:
          "Мы доставляем в пригород в радиусе 30 км от центра. Стоимость рассчитывается индивидуально.",
      },
    ],
  },
  {
    id: "ordering",
    name: "Оформление заказа",
    questions: [
      {
        id: "ordering-1",
        question: "Как оформить заказ?",
        answer:
          "Выберите понравившийся товар, добавьте в корзину, заполните форму с адресом доставки и выберите способ оплаты.",
      },
      {
        id: "ordering-2",
        question: "Можно ли изменить заказ после оформления?",
        answer:
          "Да, вы можете изменить заказ в течение 15 минут после оформления, связавшись с нами по телефону или в чате.",
      },
      {
        id: "ordering-3",
        question: "Нужна ли регистрация для заказа?",
        answer:
          "Регистрация не обязательна, но зарегистрированные пользователи получают бонусы и специальные предложения.",
      },
      {
        id: "ordering-4",
        question: "Как добавить открытку к заказу?",
        answer:
          "При оформлении заказа вы можете добавить открытку с персональным текстом. Это бесплатно.",
      },
      {
        id: "ordering-5",
        question: "Анонимная доставка",
        answer:
          "Мы можем доставить ваш заказ анонимно. Укажите это в комментарии к заказу, и получатель не узнает от кого подарок.",
      },
    ],
  },
  {
    id: "other-questions",
    name: "Другие вопросы по заказу",
    questions: [
      {
        id: "other-1",
        question: "Как отследить заказ?",
        answer:
          "После оформления заказа вы получите SMS с номером заказа. В личном кабинете можно отследить статус доставки в реальном времени.",
      },
      {
        id: "other-2",
        question: "Что делать если заказ не привезли?",
        answer:
          "Свяжитесь с нами по телефону горячей линии или в чате. Мы разберемся в ситуации и решим проблему.",
      },
      {
        id: "other-3",
        question: "Можно ли вернуть товар?",
        answer:
          "Живые цветы возврату не подлежат, но если вы получили некачественный товар, мы заменим его бесплатно.",
      },
      {
        id: "other-4",
        question: "Фото перед доставкой",
        answer:
          "Мы можем отправить вам фото букета перед доставкой. Укажите это в комментарии к заказу.",
      },
    ],
  },
  {
    id: "buyer-protection",
    name: "Защита покупателя",
    questions: [
      {
        id: "protection-1",
        question: "Что такое защита покупателя?",
        answer:
          "Защита покупателя — это гарантия возврата денег, если товар не соответствует описанию или не был доставлен.",
      },
      {
        id: "protection-2",
        question: "Как подать жалобу?",
        answer:
          "В личном кабинете выберите заказ и нажмите 'Подать жалобу'. Опишите проблему, и мы рассмотрим её в течение 24 часов.",
      },
      {
        id: "protection-3",
        question: "Гарантия свежести",
        answer:
          "Мы гарантируем свежесть цветов. Если цветы завяли в первые 3 дня, мы заменим букет бесплатно.",
      },
      {
        id: "protection-4",
        question: "Страхование заказа",
        answer:
          "При оформлении заказа вы можете добавить страховку. В случае повреждения при доставке мы вернем полную стоимость.",
      },
    ],
  },
  {
    id: "corporate",
    name: "Для корпоративных клиентов",
    questions: [
      {
        id: "corporate-1",
        question: "Корпоративные скидки",
        answer:
          "Для корпоративных клиентов предусмотрены специальные скидки от 10% при заказе от 50 000 рублей.",
      },
      {
        id: "corporate-2",
        question: "Работа по договору",
        answer:
          "Мы заключаем договоры с юридическими лицами. Оплата по счету с отсрочкой платежа до 30 дней.",
      },
      {
        id: "corporate-3",
        question: "Массовые заказы",
        answer:
          "Принимаем заказы на корпоративные мероприятия от 100 букетов. Индивидуальный подход и дизайн.",
      },
      {
        id: "corporate-4",
        question: "Документы для бухгалтерии",
        answer:
          "Предоставляем полный пакет документов: договор, счет, акт выполненных работ, счет-фактура.",
      },
      {
        id: "corporate-5",
        question: "Персональный менеджер",
        answer:
          "Каждому корпоративному клиенту назначается персональный менеджер для решения всех вопросов.",
      },
    ],
  },
  {
    id: "useful",
    name: "Полезное",
    questions: [
      {
        id: "useful-1",
        question: "Как ухаживать за букетом?",
        answer:
          "Подрежьте стебли под углом, меняйте воду каждый день, держите букет вдали от прямых солнечных лучей и сквозняков.",
      },
      {
        id: "useful-2",
        question: "Какие цветы дарят на день рождения?",
        answer:
          "На день рождения подходят яркие букеты: розы, пионы, герберы, альстромерии. Учитывайте предпочтения именинника.",
      },
      {
        id: "useful-3",
        question: "Значение цветов",
        answer:
          "Розы символизируют любовь, лилии — чистоту, хризантемы — долголетие, тюльпаны — нежность.",
      },
      {
        id: "useful-4",
        question: "Сезонные цветы",
        answer:
          "Весной популярны тюльпаны и нарциссы, летом — пионы и гортензии, осенью — хризантемы, зимой — розы и орхидеи.",
      },
    ],
  },
  {
    id: "algorithms",
    name: "Алгоритмы",
    questions: [
      {
        id: "algo-1",
        question: "Как работает поиск магазинов?",
        answer:
          "Поиск основан на вашем местоположении. Система показывает ближайшие магазины с лучшими рейтингами и быстрой доставкой.",
      },
      {
        id: "algo-2",
        question: "Рекомендации товаров",
        answer:
          "Алгоритм анализирует ваши предыдущие покупки и показывает похожие товары, которые могут вам понравиться.",
      },
      {
        id: "algo-3",
        question: "Система рейтингов",
        answer:
          "Рейтинг магазина формируется на основе отзывов покупателей, скорости доставки и качества товаров.",
      },
      {
        id: "algo-4",
        question: "Умная сортировка",
        answer:
          "Товары сортируются по популярности, новизне, цене и релевантности запросу. Вы можете выбрать свой вариант сортировки.",
      },
    ],
  },
];

// Моковые данные для МАГАЗИНОВ
const shopsData: Category[] = [
  {
    id: "registration",
    name: "Регистрация магазина",
    questions: [
      {
        id: "reg-1",
        question: "Как зарегистрировать магазин?",
        answer:
          "Заполните форму регистрации на сайте, укажите данные о вашем бизнесе, загрузите документы. Модерация занимает 1-3 рабочих дня.",
      },
      {
        id: "reg-2",
        question: "Какие документы нужны?",
        answer:
          "Для регистрации потребуются: ИНН, ОГРН, устав, свидетельство о регистрации, паспорт директора.",
      },
      {
        id: "reg-3",
        question: "Стоимость размещения",
        answer:
          "Регистрация бесплатная. Комиссия за заказы составляет 15% от суммы заказа.",
      },
      {
        id: "reg-4",
        question: "Требования к магазину",
        answer:
          "Наличие юридического лица, качественные фото товаров, готовность к доставке в срок, хорошее обслуживание клиентов.",
      },
    ],
  },
  {
    id: "orders-management",
    name: "Управление заказами",
    questions: [
      {
        id: "orders-1",
        question: "Как принять заказ?",
        answer:
          "Заказы приходят в личный кабинет магазина. Подтвердите заказ в течение 5 минут, иначе он автоматически отменится.",
      },
      {
        id: "orders-2",
        question: "Как отменить заказ?",
        answer:
          "В личном кабинете выберите заказ и нажмите 'Отменить'. Укажите причину отмены. Частые отмены снижают рейтинг.",
      },
      {
        id: "orders-3",
        question: "Уведомления о заказах",
        answer:
          "Вы получаете уведомления по SMS, email и в мобильном приложении. Настройте удобный для вас способ.",
      },
      {
        id: "orders-4",
        question: "История заказов",
        answer:
          "Вся история заказов доступна в личном кабинете. Вы можете фильтровать по датам, статусам и суммам.",
      },
      {
        id: "orders-5",
        question: "Проблемные заказы",
        answer:
          "Если возникла проблема с заказом, свяжитесь с нашей поддержкой. Мы поможем решить любую ситуацию.",
      },
    ],
  },
  {
    id: "products",
    name: "Добавление товаров",
    questions: [
      {
        id: "products-1",
        question: "Как добавить товар?",
        answer:
          "В личном кабинете нажмите 'Добавить товар', заполните описание, загрузите фото, укажите цену и наличие.",
      },
      {
        id: "products-2",
        question: "Требования к фотографиям",
        answer:
          "Фото должны быть качественными, минимум 1000x1000 пикселей, на белом фоне, без водяных знаков.",
      },
      {
        id: "products-3",
        question: "Описание товара",
        answer:
          "Опишите товар подробно: размер, состав, особенности. Хорошее описание увеличивает продажи на 40%.",
      },
      {
        id: "products-4",
        question: "Управление остатками",
        answer:
          "Обновляйте остатки товаров ежедневно. Товары 'нет в наличии' автоматически скрываются из каталога.",
      },
    ],
  },
  {
    id: "payments-shop",
    name: "Выплаты магазину",
    questions: [
      {
        id: "pay-shop-1",
        question: "Когда приходят деньги?",
        answer:
          "Выплаты производятся еженедельно по пятницам. Деньги за заказы поступают на ваш расчетный счет.",
      },
      {
        id: "pay-shop-2",
        question: "Комиссия платформы",
        answer:
          "Комиссия составляет 15% от суммы заказа. Для магазинов с высоким рейтингом комиссия снижается до 12%.",
      },
      {
        id: "pay-shop-3",
        question: "Минимальная сумма выплаты",
        answer:
          "Минимальная сумма для вывода — 5000 рублей. Если сумма меньше, она переносится на следующую неделю.",
      },
      {
        id: "pay-shop-4",
        question: "Отчетность",
        answer:
          "Формируем все необходимые документы: акты, счета-фактуры. Доступна выгрузка в 1С.",
      },
    ],
  },
  {
    id: "ratings",
    name: "Рейтинг и отзывы",
    questions: [
      {
        id: "rating-1",
        question: "Как повысить рейтинг?",
        answer:
          "Выполняйте заказы вовремя, поддерживайте качество товаров, быстро отвечайте на сообщения, собирайте положительные отзывы.",
      },
      {
        id: "rating-2",
        question: "Ответ на отзывы",
        answer:
          "Отвечайте на все отзывы, особенно отрицательные. Это показывает вашу заботу о клиентах.",
      },
      {
        id: "rating-3",
        question: "Удаление отзыва",
        answer:
          "Отзыв можно удалить только если он содержит оскорбления или ложную информацию. Подайте жалобу в поддержку.",
      },
      {
        id: "rating-4",
        question: "Бейдж 'Проверенный магазин'",
        answer:
          "Бейдж получают магазины с рейтингом 4.8+, выполнившие более 100 заказов без нарушений.",
      },
    ],
  },
  {
    id: "marketing",
    name: "Продвижение магазина",
    questions: [
      {
        id: "marketing-1",
        question: "Реклама в каталоге",
        answer:
          "Размещайте рекламные объявления в каталоге. Ваши товары будут показываться выше в результатах поиска.",
      },
      {
        id: "marketing-2",
        question: "Акции и скидки",
        answer:
          "Создавайте акции в личном кабинете. Товары со скидками получают специальный значок и больше показов.",
      },
      {
        id: "marketing-3",
        question: "Промокоды",
        answer:
          "Создавайте персональные промокоды для своих клиентов. Отслеживайте эффективность каждого промокода.",
      },
      {
        id: "marketing-4",
        question: "Статистика продаж",
        answer:
          "В аналитике доступны данные о просмотрах, конверсии, популярных товарах и источниках трафика.",
      },
      {
        id: "marketing-5",
        question: "Email-рассылки",
        answer:
          "Отправляйте рассылки своим подписчикам о новинках и специальных предложениях через платформу.",
      },
    ],
  },
  {
    id: "support",
    name: "Поддержка магазинов",
    questions: [
      {
        id: "support-1",
        question: "Как связаться с поддержкой?",
        answer:
          "Поддержка доступна 24/7 через чат в личном кабинете, email support@dinflor.ru и телефон 8-800-XXX-XX-XX.",
      },
      {
        id: "support-2",
        question: "Обучение для магазинов",
        answer:
          "Проводим бесплатные вебинары для новых магазинов. Записи доступны в разделе 'Обучение'.",
      },
      {
        id: "support-3",
        question: "База знаний",
        answer:
          "В базе знаний собраны ответы на популярные вопросы, инструкции и рекомендации по работе с платформой.",
      },
      {
        id: "support-4",
        question: "Персональный менеджер",
        answer:
          "Магазинам с оборотом от 500 000 руб/мес назначается персональный менеджер для решения всех вопросов.",
      },
    ],
  },
  {
    id: "rules",
    name: "Правила платформы",
    questions: [
      {
        id: "rules-1",
        question: "Правила размещения товаров",
        answer:
          "Запрещено размещать контрафактную продукцию, товары с завышенными ценами, использовать чужие фотографии.",
      },
      {
        id: "rules-2",
        question: "Санкции за нарушения",
        answer:
          "За нарушение правил: предупреждение, временная блокировка (3-30 дней) или полное удаление магазина.",
      },
      {
        id: "rules-3",
        question: "Политика возвратов",
        answer:
          "Магазин обязан принимать возвраты товаров ненадлежащего качества и заменять их за свой счет.",
      },
      {
        id: "rules-4",
        question: "Конфликты с покупателями",
        answer:
          "При возникновении спора с покупателем, арбитраж проводит платформа на основе предоставленных доказательств.",
      },
    ],
  },
];

export const HelpPage = () => {
  const [activeTab, setActiveTab] = useState<"buyers" | "shops">("buyers");
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    new Set(["frequent"])
  );
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Выбираем данные в зависимости от активной вкладки
  const currentData = activeTab === "buyers" ? buyersData : shopsData;

  // Фильтрация по поиску
  const filteredData = useMemo(() => {
    if (!searchQuery.trim()) return currentData;

    return currentData
      .map((category) => ({
        ...category,
        questions: category.questions.filter((q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase())
        ),
      }))
      .filter((category) => category.questions.length > 0);
  }, [currentData, searchQuery]);

  // Переключение раскрытия категории
  const toggleCategory = (categoryId: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(categoryId)) {
      newOpenCategories.delete(categoryId);
    } else {
      newOpenCategories.add(categoryId);
    }
    setOpenCategories(newOpenCategories);
  };

  // Получаем активный вопрос
  const activeQuestionData = useMemo(() => {
    if (!activeQuestion) {
      // По умолчанию показываем первый вопрос первой категории
      return filteredData[0]?.questions[0];
    }
    for (const category of filteredData) {
      const question = category.questions.find((q) => q.id === activeQuestion);
      if (question) return question;
    }
    return filteredData[0]?.questions[0];
  }, [activeQuestion, filteredData]);

  // Сброс при смене вкладки
  const handleTabChange = (tab: "buyers" | "shops") => {
    setActiveTab(tab);
    // Для покупателей открываем "Частые вопросы", для магазинов - пусто
    setOpenCategories(tab === "buyers" ? new Set(["frequent"]) : new Set());
    setActiveQuestion(null);
    setSearchQuery("");
  };

  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Заголовок */}
        <h1 className="text-[32px] font-bold text-main-200 mb-[32px]">
          Помощь
        </h1>

        {/* Поиск */}
        <div className="relative mb-[24px]">
          <input
            type="text"
            placeholder="Поиск по вопросам"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-[48px] py-[16px] rounded-[40px] border border-[#E5E5E5] text-[16px] text-main-200 placeholder:text-[#999999] focus:outline-none focus:border-main-100"
          />
          <svg
            className="absolute left-[20px] top-1/2 -translate-y-1/2"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#999999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19 19L14.65 14.65"
              stroke="#999999"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Вкладки */}
        <div className="flex gap-[16px] mb-[32px]">
          <button
            onClick={() => handleTabChange("buyers")}
            className={`px-[32px] py-[12px] rounded-[40px] text-[16px] font-medium transition ${
              activeTab === "buyers"
                ? "bg-main-100 text-white"
                : "bg-white border border-[#E5E5E5] text-main-200"
            }`}
          >
            Покупателям
          </button>
          <button
            onClick={() => handleTabChange("shops")}
            className={`px-[32px] py-[12px] rounded-[40px] text-[16px] font-medium transition ${
              activeTab === "shops"
                ? "bg-main-100 text-white"
                : "bg-white border border-[#E5E5E5] text-main-200"
            }`}
          >
            Магазинам
          </button>
        </div>

        {/* Основной контент: боковая панель + контент */}
        <div className="flex gap-[48px]">
          {/* Левая панель с категориями */}
          <div className="w-[280px] flex-shrink-0">
            {filteredData.map((category) => (
              <div key={category.id} className="mb-[8px]">
                {/* Заголовок категории */}
                <button
                  onClick={() => toggleCategory(category.id)}
                  className="w-full text-left group"
                >
                  <div className="flex items-center gap-[8px] py-[12px]">
                    <span
                      className={`text-[16px] font-medium transition ${
                        openCategories.has(category.id)
                          ? "text-main-100"
                          : "text-main-200"
                      }`}
                    >
                      {category.name}
                    </span>
                    {/* Стрелочка показывается ТОЛЬКО когда категория открыта */}
                    {openCategories.has(category.id) && (
                      <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-transform flex-shrink-0"
                      >
                        <path
                          d="M1 1.5L6 6.5L11 1.5"
                          stroke="#FF4681"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                {/* Вложенные вопросы */}
                {openCategories.has(category.id) && (
                  <div className="ml-[8px] space-y-[4px]">
                    {category.questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => setActiveQuestion(question.id)}
                        className={`w-full text-left px-[12px] py-[8px] rounded-[8px] text-[14px] transition ${
                          activeQuestion === question.id
                            ? "bg-[#F5F5F5] text-main-200 font-medium"
                            : "text-main-200 hover:bg-[#F9F9F9]"
                        }`}
                      >
                        {question.question}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Правая панель с контентом */}
          <div className="flex-1">
            {activeQuestionData && (
              <>
                <h2 className="text-[32px] font-bold text-main-200 mb-[24px]">
                  {activeQuestionData.question}
                </h2>
                <div className="text-[16px] text-main-200 leading-[1.6] space-y-[16px]">
                  <p>{activeQuestionData.answer}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
