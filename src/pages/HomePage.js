import React, { useState } from 'react';
import { Button, BrokerAdCard, ICONS } from '../App'; // Assuming these are exported from App.js
import { NewsModal } from '../App'; // Assuming NewsModal is exported from App.js
import QuotesSection from '../components/QuotesSection'; // Import the new component

const HomePage = ({ handleInstrumentDetailsClick, newsUpdatesData, brokerAds }) => {
  const [isNewsModalOpen, setNewsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const openNewsModal = (news) => {
    setSelectedNews(news);
    setNewsModalOpen(true);
  };

  const closeNewsModal = () => {
    setNewsModalOpen(false);
    setSelectedNews(null);
  };

  const WelcomeBanner = () => (
    <section className="rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden min-h-[150px]">
        <img src={`${process.env.PUBLIC_URL}/Frame 5655.svg`} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-10 md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="font-bold text-4xl mb-4">Добро пожаловать</h1>
            <p className="text-lg">Алготрейдинговые боты, готовые сигнальные решения и единый счёт для контроля сделок — всё в одном месте: подключайтесь к стратегиям без сложной установки, пользуйтесь гибкими условиями и низкими комиссиями, получайте максимум возможностей для создания ботов и инвестиций с диверсификацией средств.</p>
        </div>
        <div className="relative z-10 w-full md:w-1/2 flex items-center justify-end">
            <img src={`${process.env.PUBLIC_URL}/608e59f7-475d-4d93-a2f0-163b70558ca4.png`} alt="Welcome Illustration" className="w-[750px] h-[350px] object-contain mr-0" />
        </div>
    </section>
  );

  const PartnersCarousel = () => (
    <section className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="font-bold text-xl mb-4">Наши партнеры</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"> 
            {brokerAds.map(ad => <BrokerAdCard key={ad.name} image={ad.image} title={ad.name} />)}
        </div>
    </section>
  );

  const GettingStarted = () => (
    <section className="bg-white rounded-2xl shadow-sm p-6">
        <h3 className="font-bold text-xl mb-4">С чего начать</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange/10 p-6 rounded-xl">
                <h4 className="font-bold text-orange mb-2">Создайте своего первого бота</h4>
                <p className="text-sm text-text-grey">Перейдите в конструктор и соберите свою первую торговую стратегию без единой строчки кода.</p>
            </div>
            <div className="bg-orange/10 p-6 rounded-xl">
                <h4 className="font-bold text-orange mb-2">Подключите API биржи</h4>
                <p className="text-sm text-text-grey">Интегрируйте свой биржевой аккаунт для реальной торговли и отслеживания результатов.</p>
            </div>
            <div className="bg-orange/10 p-6 rounded-xl">
                <h4 className="font-bold text-orange mb-2">Изучите маркетплейс</h4>
                <p className="text-sm text-text-grey">Ознакомьтесь с готовыми решениями от других авторов и выберите то, что подходит вам.</p>
            </div>
        </div>
    </section>
  );

  const InvestmentSection = () => (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-6">
                <img src={`${process.env.PUBLIC_URL}/инвестиционные-инструменты-300x212.jpg`} alt="" className="w-32 h-32 object-cover rounded-lg"/>
                <div>
                    <h3 className="font-bold text-xl mb-1">Единый счет</h3>
                    <p className="text-text-grey">Управляйте всеми вашими инвестициями с одного счета. Пополняйте баланс, выводите средства и отслеживайте финансовые потоки в одном месте. Мы обеспечиваем максимальную прозрачность и безопасность ваших активов.</p>
                </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6 flex items-start gap-6">
                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye57frdf2paxg768scs4s8p_1750674491_img_2 1.png`} alt="" className="w-16 h-16"/>
                <div>
                    <h4 className="font-bold text-xl mb-1">Инвестиционные продукты</h4>
                    <p className="text-text-grey">Выбирайте из широкого спектра готовых продуктов: от консервативных ботов для долгосрочных инвестиций до высокорисковых стратегий для агрессивной торговли. Диверсифицируйте свой портфель в несколько кликов.</p>
                </div>
            </div>
            <div className="bg-white rounded-2xl p-6 flex items-start gap-6">
                <img src={`${process.env.PUBLIC_URL}/assets_task_01jye5x9b8faqtakmxk93mnj2t_1750675199_img_3 1.png`} alt="" className="w-16 h-16"/>
                <div>
                    <h4 className="font-bold text-xl mb-1">Личный рабочий стол</h4>
                    <p className="text-text-grey">Ваш персональный центр управления. Отслеживайте доходность, анализируйте производительность каждого бота, получайте отчеты и настраивайте уведомления. Все ключевые метрики вашего портфеля на одном экране.</p>
                </div>
            </div>
        </div>
    </section>
  );

  const PlatformUpdates = () => (
    <section className="bg-white rounded-2xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">Обновления платформы</h3>
            <Button variant="text">Смотреть все</Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {newsUpdatesData.slice(0, 8).map(news => (
                <div key={news.id} className="cursor-pointer group" onClick={() => openNewsModal(news)}>
                    <img src={news.image} alt={news.title} className="w-full h-32 object-cover rounded-lg mb-2"/>
                    <p className="text-sm font-semibold group-hover:text-main">{news.title}</p>
                    <p className="text-xs text-text-grey">{news.date}</p>
                </div>
            ))}
        </div>
    </section>
  );

  return (
    <div className="space-y-6">
        <WelcomeBanner />
        <QuotesSection onInstrumentClick={handleInstrumentDetailsClick} />
        <PartnersCarousel />
        <GettingStarted />
        <InvestmentSection />
        <PlatformUpdates />
        {isNewsModalOpen && <NewsModal news={selectedNews} onClose={closeNewsModal} />}
    </div>
  );
};

export default HomePage;