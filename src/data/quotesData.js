
export const quotesData = {
  currencies: [
    {
      id: 'eur-usd',
      name: 'EUR/USD',
      price: '1.0850',
      change: '+0.25%',
      changeColor: '!text-green-500',
      segment: 'Валюта',
      source: 'TradingView',
      tradingViewSymbol: 'FX_IDC:EURUSD',
      description: 'EUR/USD - это валютная пара, которая показывает, сколько долларов США (котируемая валюта) необходимо для покупки одного евро (базовая валюта). Это самая торгуемая валютная пара в мире.',
      history: 'Пара была введена в 1999 году вместе с созданием евро. Она является ключевым индикатором здоровья европейской и американской экономик.',
      tradingInfo: 'Торгуется круглосуточно, 5 дней в неделю на рынке Forex. Основные торговые сессии: европейская, американская и азиатская.',
      news: [
        { title: 'ЕЦБ сохранил процентные ставки без изменений', source: 'Reuters' },
        { title: 'Данные по инфляции в США оказались выше прогнозов', source: 'Bloomberg' },
        { title: 'Аналитики прогнозируют рост EUR/USD в следующем квартале', source: 'Financial Times' },
      ]
    },
    {
      id: 'gbp-usd',
      name: 'GBP/USD',
      price: '1.2680',
      change: '-0.11%',
      changeColor: 'text-red-500',
      segment: 'Валюта',
      source: 'TradingView',
      tradingViewSymbol: 'FX_IDC:GBPUSD',
      description: 'GBP/USD, известная как "кабель", представляет собой соотношение британского фунта стерлингов к доллару США.',
      history: 'Это одна из старейших валютных пар, активно торгуемая на протяжении веков.',
      tradingInfo: 'Активно торгуется во время лондонской и нью-йоркской сессий.',
      news: [
        { title: 'Банк Англии намекает на возможное повышение ставок', source: 'The Guardian' },
        { title: 'Розничные продажи в Великобритании превзошли ожидания', source: 'BBC News' },
      ]
    },
    {
      id: 'usd-jpy',
      name: 'USD/JPY',
      price: '147.50',
      change: '+0.50%',
      changeColor: '!text-green-500',
      segment: 'Валюта',
      source: 'TradingView',
      tradingViewSymbol: 'FX_IDC:USDJPY',
      description: 'USD/JPY показывает, сколько японских иен нужно для покупки одного доллара США.',
      history: 'Пара чувствительна к политике Банка Японии и экономическим данным из США.',
      tradingInfo: 'Высокая ликвидность, особенно во время азиатской и американской торговых сессий.',
      news: [
        { title: 'Банк Японии продолжает политику количественного смягчения', source: 'Nikkei' },
        { title: 'Экспорт из Японии показывает уверенный рост', source: 'Japan Times' },
      ]
    },
    {
      id: 'usd-chf',
      name: 'USD/CHF',
      price: '0.8950',
      change: '-0.05%',
      changeColor: 'text-red-500',
      segment: 'Валюта',
      source: 'TradingView',
      tradingViewSymbol: 'FX_IDC:USDCHF',
      description: 'USD/CHF представляет собой соотношение доллара США к швейцарскому франку.',
      history: 'Швейцарский франк традиционно считается "валютой-убежищем".',
      tradingInfo: 'Часто движется в обратной корреляции с EUR/USD.',
      news: [
        { title: 'Национальный банк Швейцарии оценивает риски инфляции', source: 'Swissinfo' },
        { title: 'Экономика Швейцарии демонстрирует стабильность', source: 'Handelszeitung' },
      ]
    }
  ],
  crypto: [
    {
      id: 'btc-usd',
      name: 'BTC/USD',
      price: '68,500.00',
      change: '+5.50%',
      changeColor: '!text-green-500',
      segment: 'Криптовалюта',
      source: 'TradingView',
      tradingViewSymbol: 'BINANCE:BTCUSDT',
      description: 'BTC/USD - это самая популярная криптовалютная пара, показывающая стоимость одного биткоина в долларах США.',
      history: 'Биткоин был создан в 2009 году и стал первой децентрализованной цифровой валютой.',
      tradingInfo: 'Торгуется 24/7 на многочисленных криптовалютных биржах по всему миру.',
      news: [
        { title: 'Институциональные инвесторы продолжают входить в биткоин', source: 'CoinDesk' },
        { title: 'Аналитики обсуждают следующий халвинг биткоина', source: 'Cointelegraph' },
      ]
    },
    {
      id: 'eth-usd',
      name: 'ETH/USD',
      price: '3,500.00',
      change: '+4.20%',
      changeColor: '!text-green-500',
      segment: 'Криптовалюта',
      source: 'TradingView',
      tradingViewSymbol: 'BINANCE:ETHUSDT',
      description: 'ETH/USD показывает стоимость одного эфира, нативной валюты платформы Ethereum, в долларах США.',
      history: 'Ethereum был запущен в 2015 году и ввел концепцию смарт-контрактов.',
      tradingInfo: 'Высокая ликвидность, торгуется круглосуточно на всех крупных криптобиржах.',
      news: [
        { title: 'Обновление сети Ethereum прошло успешно', source: 'Decrypt' },
        { title: 'Рост DeFi-сектора стимулирует спрос на Ethereum', source: 'The Block' },
      ]
    },
    {
      id: 'ltc-usd',
      name: 'LTC/USD',
      price: '85.00',
      change: '-1.80%',
      changeColor: 'text-red-500',
      segment: 'Криптовалюта',
      source: 'TradingView',
      tradingViewSymbol: 'BINANCE:LTCUSDT',
      description: 'LTC/USD - пара, показывающая стоимость лайткоина в долларах США. Лайткоин часто называют "цифровым серебром".',
      history: 'Создан в 2011 году как одна из первых альтернатив биткоину (альткоин).',
      tradingInfo: 'Торгуется на большинстве криптобирж, но с меньшим объемом, чем BTC или ETH.',
      news: [
        { title: 'Разработчики Litecoin анонсировали новые функции', source: 'Litecoin Foundation' },
        { title: 'Активность в сети Litecoin показывает умеренный рост', source: 'Glassnode' },
      ]
    },
    {
      id: 'usdt-usd',
      name: 'USDT/USD',
      price: '1.00',
      change: '+0.01%',
      changeColor: '!text-green-500',
      segment: 'Криптовалюта',
      source: 'TradingView',
      tradingViewSymbol: 'BINANCE:USDTUSD',
      description: 'USDT (Tether) - это стейблкоин, криптовалюта, стоимость которой привязана к доллару США в соотношении 1:1.',
      history: 'Запущен в 2014 году для обеспечения стабильности на волатильном крипторынке.',
      tradingInfo: 'Используется для торговли на криптобиржах как эквивалент доллара США.',
      news: [
        { title: 'Tether публикует отчет о резервах', source: 'Tether' },
        { title: 'Объем транзакций в USDT достиг нового рекорда', source: 'Chainalysis' },
      ]
    }
  ],
  stocks: [
    {
      id: 'sp500',
      name: 'S&P 500',
      price: '5,400.00',
      change: '+1.20%',
      changeColor: '!text-green-500',
      segment: 'Фондовый рынок',
      source: 'TradingView',
      tradingViewSymbol: 'SP:SPX',
      description: 'S&P 500 - это фондовый индекс, отслеживающий акции 500 крупнейших публичных компаний США.',
      history: 'Считается одним из лучших показателей здоровья американского фондового рынка.',
      tradingInfo: 'Торгуется на биржах NYSE и NASDAQ. Основные часы торгов с 9:30 до 16:00 по восточному времени (ET).',
      news: [
        { title: 'Технологический сектор толкает S&P 500 к новым высотам', source: 'Wall Street Journal' },
        { title: 'ФРС внимательно следит за показателями индекса', source: 'CNBC' },
      ]
    },
    {
      id: 'moex',
      name: 'MOEX',
      price: '3,100.00',
      change: '-0.80%',
      changeColor: 'text-red-500',
      segment: 'Фондовый рынок',
      source: 'TradingView',
      tradingViewSymbol: 'MOEX:IMOEX',
      description: 'Индекс МосБиржи (MOEX) - основной индикатор российского фондового рынка, включающий акции крупнейших компаний России.',
      history: 'Отражает состояние российской экономики и настроения инвесторов.',
      tradingInfo: 'Торгуется на Московской бирже.',
      news: [
        { title: 'Цены на нефть влияют на динамику индекса МосБиржи', source: 'РБК' },
        { title: 'Дивидендный сезон в России в разгаре', source: 'Коммерсантъ' },
      ]
    },
    {
      id: 'nasdaq',
      name: 'NASDAQ',
      price: '17,500.00',
      change: '+1.80%',
      changeColor: '!text-green-500',
      segment: 'Фондовый рынок',
      source: 'TradingView',
      tradingViewSymbol: 'NASDAQ:NDX',
      description: 'NASDAQ Composite - это фондовый индекс, включающий более 3000 акций, торгуемых на бирже NASDAQ, с высокой долей технологических компаний.',
      history: 'Известен своей ориентацией на инновационные и технологические компании.',
      tradingInfo: 'Торгуется на бирже NASDAQ.',
      news: [
        { title: 'Акции технологических гигантов продолжают расти', source: 'TechCrunch' },
        { title: 'IPO новых стартапов на NASDAQ привлекают внимание', source: 'VentureBeat' },
      ]
    },
    {
      id: 'stoxx600',
      name: 'Stoxx 600',
      price: '515.00',
      change: '+0.50%',
      changeColor: '!text-green-500',
      segment: 'Фондовый рынок',
      source: 'TradingView',
      tradingViewSymbol: 'INDEX:SXXP',
      description: 'STOXX Europe 600 - это фондовый индекс, отслеживающий 600 крупнейших компаний из 17 стран Европы.',
      history: 'Является ключевым показателем для европейского фондового рынка.',
      tradingInfo: 'Торгуется на различных европейских биржах.',
      news: [
        { title: 'Европейские акции растут на фоне позитивных экономических данных', source: 'Euronews' },
        { title: 'Автомобильный сектор показывает лучшие результаты в STOXX 600', source: 'Financial Times' },
      ]
    }
  ]
};

export const allInstruments = [
  ...quotesData.currencies,
  ...quotesData.crypto,
  ...quotesData.stocks,
];
