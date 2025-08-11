const helpData = {
  siteInfo: {
    title: "Добро пожаловать в Центр Поддержки AlgoVerse!",
    content: `Здесь вы найдете ответы на все ваши вопросы о платформе AlgoVerse. Мы стремимся сделать ваш опыт максимально комфортным и продуктивным. Наш центр поддержки постоянно обновляется, чтобы предоставить вам самую актуальную информацию.
    
    AlgoVerse — это инновационная платформа для алгоритмической торговли, которая позволяет как новичкам, так и опытным трейдерам создавать, тестировать и запускать торговых ботов без глубоких знаний программирования. Мы предоставляем мощные инструменты для автоматизации ваших стратегий, аналитики и управления портфелем.
    
    Наша миссия — демократизировать доступ к алгоритмической торговле, сделав ее доступной и понятной для каждого. Мы верим, что будущее финансов за автоматизацией, и хотим, чтобы вы были в авангарде этого движения.`,
  },
  articles: [
    {
      id: 1,
      title: "Как начать работу с AlgoVerse: Первые шаги",
      description: "Подробное руководство для новичков: от регистрации до первой запущенной стратегии.",
      fullContent: `### Шаг 1: Регистрация и верификация
      
      Для начала работы на платформе AlgoVerse вам необходимо пройти простую процедуру регистрации. После ввода базовых данных, таких как email и пароль, система предложит вам пройти верификацию личности. Это стандартная процедура, необходимая для обеспечения безопасности ваших средств и соблюдения регуляторных требований. Загрузите необходимые документы и дождитесь подтверждения.
      
      ### Шаг 2: Изучение интерфейса
      
      После успешной верификации вы попадете на главную панель управления. Ознакомьтесь с основными разделами: "Маркетплейс" для выбора готовых ботов, "Рабочий стол" для управления вашими активными стратегиями, "Лента" для новостей и аналитики, а также "Сообщения" для связи с поддержкой и другими пользователями.
      
      ### Шаг 3: Выбор и запуск первого бота
      
      В "Маркетплейсе" вы найдете широкий выбор алгоритмических ботов, разработанных как нашей командой, так и независимыми разработчиками. Вы можете отфильтровать их по типу актива, доходности, уровню риска и другим параметрам. Выберите бота, который соответствует вашим инвестиционным целям, и следуйте инструкциям по его активации. Многие боты предлагают демо-режим для тестирования без реальных вложений.
      
      ### Шаг 4: Мониторинг и оптимизация
      
      На "Рабочем столе" вы сможете отслеживать производительность ваших запущенных ботов в реальном времени. Анализируйте графики доходности, просадки и другие ключевые метрики. Наша платформа предоставляет инструменты для оптимизации стратегий, позволяя вам адаптироваться к меняющимся рыночным условиям. Не забывайте регулярно проверять раздел "Обновления" для получения информации о новых функциях и улучшениях.
      
      Мы всегда готовы помочь вам на каждом этапе вашего пути в AlgoVerse!`,
      image: `${process.env.PUBLIC_URL}/инвестиционные-инструменты-300x212.jpg`,
    },
    {
      id: 2,
      title: "Понимание рисков в алгоритмической торговле",
      description: "Важность управления рисками и как AlgoVerse помогает их минимизировать.",
      fullContent: `### Что такое риск в алгоритмической торговле?
      
      Риск в алгоритмической торговле — это вероятность потери части или всего инвестированного капитала из-за неблагоприятных рыночных движений, ошибок в алгоритме или технических сбоев. Важно понимать, что любая торговля на финансовых рынках сопряжена с риском, и алгоритмическая торговля не является исключением.
      
      ### Основные виды рисков:
      
      1.  **Рыночный риск:** Связан с непредсказуемыми изменениями цен активов. Даже самые совершенные алгоритмы не могут гарантировать прибыль в условиях высокой волатильности или неожиданных событий.
      2.  **Технический риск:** Ошибки в коде бота, сбои в работе серверов, проблемы с интернет-соединением могут привести к некорректному исполнению сделок или потере данных.
      3.  **Риск ликвидности:** Недостаточная ликвидность на рынке может затруднить открытие или закрытие позиций по желаемой цене.
      4.  **Риск модели:** Если торговая стратегия основана на некорректной или устаревшей модели, это может привести к систематическим убыткам.
      
      ### Как AlgoVerse помогает управлять рисками:
      
      *   **Тестирование на исторических данных (бэктестинг):** Наша платформа позволяет тщательно тестировать ботов на прошлых рыночных данных, выявляя потенциальные уязвимости и оптимизируя параметры.
      *   **Управление просадками:** Вы можете настроить максимальный допустимый уровень просадки для каждого бота, при достижении которого торговля будет автоматически приостановлена.
      *   **Диверсификация портфеля:** AlgoVerse предлагает широкий выбор ботов для различных активов и стратегий, что позволяет диверсифицировать ваш инвестиционный портфель и снизить общий риск.
      *   **Мониторинг в реальном времени:** Наш дашборд предоставляет полную аналитику по всем вашим активным ботам, позволяя вам оперативно реагировать на любые изменения.
      *   **Образовательные ресурсы:** В нашем Центре Поддержки вы найдете статьи и видеоуроки по управлению рисками и построению устойчивых торговых стратегий.
      
      Помните, что ответственное управление рисками — ключ к успешной и долгосрочной торговле.`,
      image: `${process.env.PUBLIC_URL}/Analytics_set.svg`,
    },
    {
      id: 3,
      title: "Основы алгоритмической торговли",
      description: "Погружение в мир автоматизированных стратегий: термины, принципы, преимущества.",
      fullContent: "Полное содержание статьи 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/3.jpg`,
    },
    {
      id: 4,
      title: "Выбор первого алго-бота: на что обратить внимание",
      description: "Советы по выбору подходящего торгового робота для ваших целей и уровня риска.",
      fullContent: "Полное содержание статьи 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/4.jpg`,
    },
    {
      id: 5,
      title: "Управление рисками в автоматической торговле",
      description: "Как минимизировать потенциальные убытки и защитить свой капитал.",
      fullContent: "Полное содержание статьи 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/5.jpg`,
    },
    {
      id: 6,
      title: "Психология трейдинга: как сохранить спокойствие",
      description: "Важность эмоционального контроля и дисциплины в торговле.",
      fullContent: "Полное содержание статьи 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/6.jpg`,
    },
    {
      id: 7,
      title: "Настройка торгового терминала для AlgoVerse",
      description: "Подробная инструкция по подключению и настройке вашего терминала.",
      fullContent: "Полное содержание статьи 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/7.jpg`,
    },
    {
      id: 8,
      title: "Использование индикаторов для анализа рынка",
      description: "Обзор популярных индикаторов и их применение в торговых стратегиях.",
      fullContent: "Полное содержание статьи 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/8.jpg`,
    },
    {
      id: 9,
      title: "Бэктестинг и оптимизация алго-ботов",
      description: "Как тестировать и улучшать производительность ваших торговых роботов.",
      fullContent: "Полное содержание статьи 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/9.jpg`,
    },
    {
      id: 10,
      title: "Торговля на новостях с помощью алго-ботов",
      description: "Стратегии автоматической торговли во время важных экономических событий.",
      fullContent: "Полное содержание статьи 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: `${process.env.PUBLIC_URL}/10.jpg`,
    },
  ],
  videoTutorials: [
    {
      id: 1,
      title: "Обзор интерфейса AlgoVerse",
      thumbnailUrl: `${process.env.PUBLIC_URL}/assets_task_01jye57frdf2paxg768scs4s8p_1750674491_img_2 1.png`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder YouTube video
      description: `Познакомьтесь с основными элементами интерфейса платформы AlgoVerse. В этом видео мы подробно рассмотрим каждый раздел: от главной панели управления до настроек профиля. Вы узнаете, как легко ориентироваться на платформе и быстро находить нужные функции.
      
      Таймкоды:
      0:00 - Введение
      0:30 - Главная панель
      1:45 - Маркетплейс
      3:00 - Рабочий стол
      4:15 - Настройки профиля
      
      Не забудьте подписаться на наш канал, чтобы не пропустить новые обучающие видео!`,
      comments: [
        { id: 1, author: "Трейдер_777", avatar: "https://placehold.co/32x32/FF5733/fff?text=T7", text: "Очень полезное видео, спасибо! Интерфейс действительно интуитивно понятный.", likes: 15 },
        { id: 2, author: "Крипто_Гуру", avatar: "https://placehold.co/32x32/33FF57/fff?text=КГ", text: "Отличный обзор! Жду видео по созданию своего бота.", likes: 8 },
      ],
    },
    {
      id: 2,
      title: "Как создать своего первого алго-бота",
      thumbnailUrl: `${process.env.PUBLIC_URL}/assets_task_01jye5x9b8faqtakmxk93mnj2t_1750675199_img_3 1.png`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder YouTube video
      description: `Пошаговое руководство по созданию вашей первой автоматизированной торговой стратегии на AlgoVerse. Мы покажем, как использовать наш конструктор ботов, настраивать параметры и проводить бэктестинг.
      
      Это видео идеально подходит для тех, кто хочет начать автоматизировать свою торговлю, но не имеет опыта в программировании. Мы разберем все от А до Я, чтобы вы могли запустить своего первого бота уже сегодня!`,
      comments: [],
    },
    {
      id: 3,
      title: "Подключение API ключей биржи",
      thumbnailUrl: `${process.env.PUBLIC_URL}/11.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Пошаговая видеоинструкция по безопасной интеграции ваших API ключей.",
      comments: [],
    },
    {
      id: 4,
      title: "Стратегии скальпинга для начинающих",
      thumbnailUrl: `${process.env.PUBLIC_URL}/12.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Практический видеоурок по основам скальпинга с использованием алго-ботов.",
      comments: [],
    },
    {
      id: 5,
      title: "Обзор новых функций AlgoVerse",
      thumbnailUrl: `${process.env.PUBLIC_URL}/13.jpeg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Видеопрезентация последних обновлений и добавленных возможностей платформы.",
      comments: [],
    },
    {
      id: 6,
      title: "Как анализировать отчеты по торговле",
      thumbnailUrl: `${process.env.PUBLIC_URL}/2.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Видеоурок по интерпретации данных и улучшению торговых результатов.",
      comments: [],
    },
    {
      id: 7,
      title: "Создание собственного индикатора",
      thumbnailUrl: `${process.env.PUBLIC_URL}/3.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Продвинутый видеоурок для разработчиков: как создать свой технический индикатор.",
      comments: [],
    },
    {
      id: 8,
      title: "Оптимизация алго-ботов: практические советы",
      thumbnailUrl: `${process.env.PUBLIC_URL}/4.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Видео с советами по повышению эффективности ваших торговых роботов.",
      comments: [],
    },
    {
      id: 9,
      title: "Торговля на Форекс с AlgoVerse",
      thumbnailUrl: `${process.env.PUBLIC_URL}/5.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Видеоурок по особенностям торговли на валютном рынке с использованием платформы.",
      comments: [],
    },
    {
      id: 10,
      title: "Как использовать сигналы для торговли",
      thumbnailUrl: `${process.env.PUBLIC_URL}/6.jpg`,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Видеоинструкция по подписке и использованию торговых сигналов.",
      comments: [],
    },
  ],
  instructions: [
    {
      id: 1,
      title: "Подключение API ключей биржи",
      description: "Пошаговая инструкция по безопасному подключению ваших API ключей.",
      steps: [
        "Войдите в свой аккаунт на бирже (например, Binance, Bybit, OKX).",
        "Перейдите в раздел 'Управление API' или 'API Management'.",
        "Создайте новый API ключ. Убедитесь, что вы предоставили права на 'Чтение' и 'Торговлю'. Права на 'Вывод средств' не требуются и не рекомендуются.",
        "Скопируйте 'API Key' и 'Secret Key'.",
        "Вставьте скопированные ключи в соответствующие поля на платформе AlgoVerse в разделе 'Настройки' -> 'Подключение бирж'.",
        "Нажмите 'Сохранить' и дождитесь подтверждения успешного подключения.",
      ],
    },
    {
      id: 2,
      title: "Настройка уведомлений",
      description: "Как настроить получение уведомлений о работе ваших ботов и важных событиях.",
      steps: [
        "Перейдите в 'Настройки профиля' -> 'Уведомления'.",
        "Выберите типы уведомлений, которые вы хотите получать (например, о завершении сделки, достижении просадки, новых обновлениях).",
        "Укажите предпочтительный способ получения уведомлений: email, push-уведомления в приложении или Telegram-бот.",
        "Сохраните изменения.",
      ],
    },
    {
      id: 3,
      title: "Как выбрать торговую стратегию",
      description: "Руководство по выбору оптимальной торговой стратегии для ваших целей.",
      steps: [
        "Определите свои инвестиционные цели и горизонт планирования.",
        "Оцените свою толерантность к риску.",
        "Изучите различные типы торговых стратегий (трендовые, контртрендовые, арбитражные и т.д.).",
        "Проведите бэктестинг выбранных стратегий на исторических данных.",
        "Начните с небольших объемов и постепенно увеличивайте их по мере получения опыта.",
      ],
    },
    {
      id: 4,
      title: "Оптимизация производительности бота",
      description: "Советы по улучшению эффективности работы ваших алго-ботов.",
      steps: [
        "Регулярно анализируйте отчеты о производительности бота.",
        "Проводите оптимизацию параметров бота на актуальных рыночных данных.",
        "Следите за новостями и событиями, которые могут повлиять на рынок.",
        "Рассмотрите возможность диверсификации портфеля, используя несколько ботов.",
        "Обновляйте программное обеспечение платформы и ботов до последних версий.",
      ],
    },
    {
      id: 5,
      title: "Использование стоп-лоссов и тейк-профитов",
      description: "Важность установки стоп-лоссов и тейк-профитов для управления рисками.",
      steps: [
        "Определите максимальный допустимый убыток для каждой сделки (стоп-лосс).",
        "Определите желаемую прибыль для каждой сделки (тейк-профит).",
        "Установите стоп-лосс и тейк-профит при открытии позиции.",
        "Не перемещайте стоп-лосс против себя во время сделки.",
        "Используйте трейлинг-стоп для защиты прибыли.",
      ],
    },
    {
      id: 6,
      title: "Как избежать распространенных ошибок",
      description: "Список типичных ошибок новичков и способы их предотвращения.",
      steps: [
        "Не торгуйте на последние деньги.",
        "Не рискуйте больше, чем можете позволить себе потерять.",
        "Не игнорируйте бэктестинг и демо-торговлю.",
        "Не поддавайтесь эмоциям: придерживайтесь своей стратегии.",
        "Не перегружайте свой портфель слишком большим количеством активов.",
      ],
    },
    {
      id: 7,
      title: "Работа с отчетами и аналитикой",
      description: "Как использовать аналитические отчеты для улучшения торговых результатов.",
      steps: [
        "Регулярно просматривайте отчеты о доходности и просадках.",
        "Анализируйте причины успешных и убыточных сделок.",
        "Используйте данные для корректировки своей торговой стратегии.",
        "Сравнивайте свои результаты с бенчмарками и другими трейдерами.",
        "Определяйте сильные и слабые стороны своей торговли.",
      ],
    },
    {
      id: 8,
      title: "Диверсификация инвестиционного портфеля",
      description: "Важность распределения активов для снижения рисков.",
      steps: [
        "Не вкладывайте все средства в один актив или стратегию.",
        "Распределяйте инвестиции между различными классами активов (акции, облигации, криптовалюты, товары).",
        "Используйте ботов с разными торговыми стратегиями.",
        "Регулярно пересматривайте и ребалансируйте свой портфель.",
        "Учитывайте корреляцию между активами при диверсификации.",
      ],
    },
    {
      id: 9,
      title: "Как выбрать надежного брокера",
      description: "Критерии выбора брокера для алгоритмической торговли.",
      steps: [
        "Проверьте наличие лицензии и регулирование брокера.",
        "Оцените размер комиссий и спредов.",
        "Изучите доступные торговые инструменты и платформы.",
        "Прочитайте отзывы других пользователей.",
        "Убедитесь в наличии качественной технической поддержки.",
      ],
    },
    {
      id: 10,
      title: "Налогообложение прибыли от торговли",
      description: "Основные аспекты налогообложения доходов от алгоритмической торговли.",
      steps: [
        "Изучите налоговое законодательство вашей страны.",
        "Ведите учет всех торговых операций и прибыли/убытков.",
        "Консультируйтесь с налоговым специалистом при необходимости.",
        "Своевременно подавайте налоговые декларации.",
        "Учитывайте возможность применения налоговых вычетов.",
      ],
    },
  ],
  updates: [
    { id: 1, title: "Новые возможности API", date: "05.08.2025", description: "Мы расширили возможности нашего API, добавив новые методы для работы с историческими данными и управления торговыми счетами. Теперь вы можете проводить более глубокий анализ и автоматизировать еще больше рутинных задач. Подробности в документации.", image: `${process.env.PUBLIC_URL}/images (1).jpg` },
    { id: 2, title: "Партнерская программа", date: "01.08.2025", description: "Запущена новая партнерская программа! Привлекайте новых пользователей и получайте процент от их торговых комиссий. Это отличная возможность для дополнительного заработка. Все условия и подробности вы найдете в личном кабинете.", image: `${process.env.PUBLIC_URL}/images (2).jpg` },
    { id: 3, title: "Обновление маркета", date: "28.07.2025", description: "Мы полностью переработали дизайн и функционал маркета. Теперь находить и выбирать нужных ботов стало еще проще и удобнее. Добавлены новые фильтры, улучшена навигация и производительность. Оцените новый маркет уже сейчас!", image: `${process.env.PUBLIC_URL}/images (3).jpg` },
    { id: 4, title: "Новый тип графиков", date: "25.07.2025", description: "Встречайте новый тип графиков для анализа — Renko! Этот инструмент поможет вам по-новому взглянуть на движение цен, отсекая рыночный шум и выделяя ключевые тренды. Renko-графики уже доступны в терминале для всех пользователей.", image: `${process.env.PUBLIC_URL}/images (4).jpg` },
    { id: 5, title: "Интеграция с новыми биржами", date: "20.07.2025", description: "Теперь AlgoVerse поддерживает торговлю на еще большем количестве популярных криптовалютных и фондовых бирж.", image: `${process.env.PUBLIC_URL}/images (5).jpg` },
    { id: 6, title: "Улучшение аналитических отчетов", date: "15.07.2025", description: "Мы обновили систему аналитики, предоставив еще более подробные и наглядные отчеты по вашей торговой активности.", image: `${process.env.PUBLIC_URL}/images (6).jpg` },
    { id: 7, title: "Новый дизайн личного кабинета", date: "10.07.2025", description: "Представляем обновленный, более интуитивно понятный и функциональный дизайн вашего личного кабинета.", image: `${process.env.PUBLIC_URL}/images (7).jpg` },
    { id: 8, title: "Расширение библиотеки алго-ботов", date: "05.07.2025", description: "В нашу библиотеку добавлены новые высокодоходные алго-боты для различных рынков.", image: `${process.env.PUBLIC_URL}/images (8).jpg` },
    { id: 9, title: "Улучшение скорости исполнения ордеров", date: "01.07.2025", description: "Мы оптимизировали инфраструктуру для обеспечения еще более быстрого и надежного исполнения ваших торговых ордеров.", image: `${process.env.PUBLIC_URL}/images (9).jpg` },
    { id: 10, title: "Новые обучающие материалы для трейдеров", date: "28.06.2025", description: "Мы добавили серию новых обучающих видео и статей, чтобы помочь вам освоить алго-трейдинг.", image: `${process.env.PUBLIC_URL}/images.jpg` },
  ],
  news: [
    {
      id: 1,
      author: { name: 'CryptoWhale', avatar: 'https://placehold.co/40x40/E2BAA4/000000?text=CW' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/images (1).jpg` },
      title: 'Анализ рынка BTC: куда движется главная криптовалюта?',
      description: 'Глубокий анализ текущей ситуации на рынке Bitcoin. Рассматриваем ключевые уровни поддержки и сопротивления, а также возможные сценарии развития событий на ближайшие недели. #BTC #Криптовалюта #Аналитика',
      views: '12.5k', likes: 1200, reposts: 45, commentsCount: 89,
      comments: [
        { id: 1, author: 'User1', avatar: 'https://placehold.co/32x32/333/fff?text=U1', text: 'Отличный анализ!', likes: 15 },
      ],
      fullContent: "Полное содержание новости 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 2,
      author: { name: 'Oil Baron', avatar: 'https://placehold.co/40x40/333/fff?text=OB' },
      media: { type: 'video', url: `${process.env.PUBLIC_URL}/1626182958_13-kartinkin-com-p-treider-art-art-krasivo-15.jpg`, thumbnail: `${process.env.PUBLIC_URL}/1626182958_13-kartinkin-com-p-treider-art-art-krasivo-15.jpg` },
      title: 'Нефтяные фьючерсы: стоит ли ожидать роста?',
      description: 'Видеообзор рынка нефти. Обсуждаем влияние геополитических факторов и данных по запасам на цены. #Нефть #Фьючерсы #Инвестиции',
      views: '8.2k', likes: 850, reposts: 23, commentsCount: 45, comments: [],
      fullContent: "Полное содержание новости 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 3,
      author: { name: 'Gold Bug', avatar: 'https://placehold.co/40x40/DAA520/fff?text=GB' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/images (3).jpg` },
      title: 'Золото как защитный актив в условиях инфляции',
      description: 'Текстовый пост о роли золота в инвестиционном портфеле. Почему драгоценный металл остается актуальным и как его использовать для хеджирования рисков. #Золото #Инфляция #Портфель',
      views: '25.1k', likes: 2300, reposts: 150, commentsCount: 210, comments: [],
      fullContent: "Полное содержание новости 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 4,
      author: { name: 'Forex Guru', avatar: 'https://placehold.co/40x40/4682B4/fff?text=FG' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/images (4).jpg` },
      title: 'Торговая стратегия для EUR/USD на эту неделю',
      description: 'Разбор торговой стратегии для самой популярной валютной пары. Точки входа, стоп-лоссы и цели. #EURUSD #Forex #Трейдинг',
      views: '5.7k', likes: 600, reposts: 15, commentsCount: 33, comments: [],
      fullContent: "Полное содержание новости 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 5,
      author: { name: 'Index Investor', avatar: 'https://placehold.co/40x40/2E8B57/fff?text=II' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/images (5).jpg` },
      title: 'S&P 500: новый исторический максимум?',
      description: 'Анализируем перспективы американского фондового рынка. Есть ли еще потенциал для роста и какие сектора выглядят наиболее привлекательно. #SP500 #Акции #Рынок',
      views: '18.9k', likes: 1800, reposts: 98, commentsCount: 150, comments: [],
      fullContent: "Полное содержание новости 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 6,
      author: { name: 'Trader Pro', avatar: 'https://placehold.co/40x40/A4E2B9/000000?text=TP' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/images (6).jpg` },
      title: 'Как выбрать лучшего алго-бота для себя',
      description: 'Руководство по выбору оптимального алго-бота, учитывая ваши инвестиционные цели и рисковый профиль.',
      views: '10.1k', likes: 950, reposts: 30, commentsCount: 70, comments: [],
      fullContent: "Полное содержание новости 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 7,
      author: { name: 'Market Analyst', avatar: 'https://placehold.co/40x40/E2A4A4/000000?text=MA' },
      media: { type: 'video', url: `${process.env.PUBLIC_URL}/7.jpg`, thumbnail: `${process.env.PUBLIC_URL}/7.jpg` },
      title: 'Прогноз по криптовалютам на вторую половину года',
      description: 'Экспертный прогноз по движению основных криптовалют до конца года. Какие факторы будут влиять на рынок и чего ожидать инвесторам.',
      views: '15.3k', likes: 1500, reposts: 60, commentsCount: 100, comments: [],
      fullContent: "Полное содержание новости 7. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 8,
      author: { name: 'Algo Expert', avatar: 'https://placehold.co/40x40/A4A4E2/000000?text=AE' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/8.jpg` },
      title: 'Новые возможности для автоматизации торговли',
      description: 'Обзор последних обновлений платформы, расширяющих функционал для создания и управления торговыми стратегиями.',
      views: '7.8k', likes: 700, reposts: 25, commentsCount: 50, comments: [],
      fullContent: "Полное содержание новости 8. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 9,
      author: { name: 'FinTech Insights', avatar: 'https://placehold.co/40x40/E2E2A4/000000?text=FI' },
      media: { type: 'image', url: `${process.env.PUBLIC_URL}/9.jpg` },
      title: 'Влияние ИИ на будущее финансовых рынков',
      description: 'Как искусственный интеллект меняет ландшафт финансовых рынков и какие перспективы открывает для трейдеров и инвесторов.',
      views: '20.5k', likes: 2000, reposts: 100, commentsCount: 180, comments: [],
      fullContent: "Полное содержание новости 9. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      id: 10,
      author: { name: 'Global Markets', avatar: 'https://placehold.co/40x40/A4E2E2/000000?text=GM' },
      media: { type: 'video', url: `${process.env.PUBLIC_URL}/10.jpg`, thumbnail: `${process.env.PUBLIC_URL}/10.jpg` },
      title: 'Еженедельный обзор мировых рынков',
      description: 'Краткий обзор ключевых событий и тенденций на мировых финансовых рынках за прошедшую неделю. Что ждать от следующей?',
      views: '11.2k', likes: 1100, reposts: 40, commentsCount: 80, comments: [],
      fullContent: "Полное содержание новости 10. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ],
};

export default helpData;
