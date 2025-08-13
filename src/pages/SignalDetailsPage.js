import React, { useState, useEffect, useRef, memo } from 'react';
import { Button, ICONS } from '../App'; // Assuming these are exported from App.js
import TradingViewWidget from '../components/TradingViewWidget';


const ProfitabilityChart = () => {
    const [period, setPeriod] = useState('1 год');
    const periods = ['1 мес', '3 мес', '6 мес', '1 год', 'Всё время'];
    return (
        <div>
            <div className="flex justify-end mb-2">
                <div className="flex items-center border border-grey-2 rounded-full p-1">
                    {periods.map(p => (
                        <button key={p} onClick={() => setPeriod(p)} className={`px-3 py-1 rounded-full text-xs font-semibold ${period === p ? 'bg-main text-white' : 'text-text-grey'}`}>
                            {p}
                        </button>
                    ))}
                </div>
            </div>
            <div className="w-full h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                 <svg viewBox="0 0 400 200" className="w-full h-full">
                    <g className="text-xs text-gray-400">
                        <text x="0" y="15" fill="currentColor">100%</text>
                        <line x1="30" x2="400" y1="10" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="0" y="65" fill="currentColor">50%</text>
                        <line x1="30" x2="400" y1="60" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="0" y="115" fill="currentColor">0%</text>
                        <line x1="30" x2="400" y1="110" stroke="#e5e7eb" strokeWidth="1" />
                        <text x="0" y="165" fill="currentColor">-50%</text>
                        <line x1="30" x2="400" y1="160" stroke="#e5e7eb" strokeWidth="1" />
                    </g>
                    <path d="M 40 110 C 80 90, 120 40, 180 60 C 240 80, 300 50, 380 30" stroke="#10B981" strokeWidth="2" fill="none" />
                </svg>
            </div>
        </div>
    );
}

const Reviews = () => (
    <div className="space-y-6 py-6">
        <div className="border-b border-grey-2 pb-4">
            <div className="flex items-center mb-2">
                <img src="https://placehold.co/40x40/E2BAA4/000000?text=AV" alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className="font-semibold">Александр Волков</p>
                    <p className="text-xs text-text-grey">2 дня назад</p>
                </div>
            </div>
            <p className="text-text-grey">Отличные сигналы, за месяц +25% к депозиту. Все четко и по делу, рекомендую!</p>
        </div>
        <div className="border-b border-grey-2 pb-4">
            <div className="flex items-center mb-2">
                <img src="https://placehold.co/40x40/A4E2B9/000000?text=ЕП" alt="User" className="w-10 h-10 rounded-full mr-3" />
                <div>
                    <p className="font-semibold">Елена Петрова</p>
                    <p className="text-xs text-text-grey">1 неделю назад</p>
                </div>
            </div>
            <p className="text-text-grey">Подключилась по рекомендации, пока все нравится. Бывают небольшие просадки, но в целом тренд положительный.</p>
        </div>
    </div>
);

const Updates = () => (
    <div className="space-y-6 py-6">
        <div className="border-b border-grey-2 pb-4">
            <p className="font-semibold">Версия 2.1 - <span className="text-text-grey">01.08.2025</span></p>
            <p className="text-text-grey mt-2">- Улучшен алгоритм определения тренда на низких таймфреймах.
- Добавлена поддержка торговли по паре SOL/USDT.</p>
        </div>
        <div className="pb-4">
            <p className="font-semibold">Версия 2.0 - <span className="text-text-grey">15.07.2025</span></p>
            <p className="text-text-grey mt-2">- Полностью переработан риск-менеджмент. Теперь стоп-лосс рассчитывается динамически.</p>
        </div>
    </div>
);

const SignalDetailsPage = ({ signal, onBack, isSubscribed }) => {
  const [activeTab, setActiveTab] = useState('Информация');
  const tabs = ['Информация', 'Инструкция', 'Отзывы', 'Обновления'];
  const [isActive, setIsActive] = useState(true);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Информация':
        return (
          <div className="py-6 space-y-6">
            <div>
                <h4 className="font-bold text-xl mb-4">График прибыльности</h4>
                <ProfitabilityChart />
            </div>
            <div>
                <h4 className="font-bold text-xl mb-4">Метрики</h4>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Доходность за год</span>
                        <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                        <span className="font-semibold text-green-500">+{Math.floor(Math.random() * 100 + 50)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Уровень риска</span>
                        <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                        <span className="font-semibold">{signal.risk}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Максимальная просадка</span>
                        <div className="flex-grow border-b border-dashed border-grey-2 mx-4"></div>
                        <span className="font-semibold">{Math.floor(Math.random() * 20 + 5)}%</span>
                    </div>
                </div>
            </div>
          </div>
        );
      case 'Инструкция':
        return (
            <div className="py-6 text-text-grey space-y-2">
                <p>Сигнал основан на трендовой стратегии для пары {signal.name}.</p>
                <p>В основе лежит пересечение скользящих средних (MA) на старших таймфреймах для определения основного направления тренда. Для более точного входа в сделку используются проприетарные индикаторы, анализирующие текущую волатильность и силу покупателей/продавцов.</p>
                <p><b>Уровень риска:</b> {signal.risk}. Рекомендуемый мани-менеджмент: не более 2% от депозита на сделку.</p>
                <p><b>Прибыльность:</b> Историческая доходность не гарантирует будущих результатов, но бэктесты показывают среднюю доходность в районе {signal.profit}% в год.</p>
            </div>
        );
      case 'Отзывы':
        return <Reviews />;
      case 'Обновления':
        return <Updates />;
      default:
        return <div className="py-6"><p>{`Контент для вкладки "${activeTab}" будет добавлен позже.`}</p></div>;
    }
  };

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="icon" onClick={onBack} className="mr-4">
          {React.createElement(ICONS.arrowLeft)}
        </Button>
        <h2 className="font-bold text-2xl">{signal.name}</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="w-full h-[550px] mb-6">
                    <TradingViewWidget symbol={signal.tradingViewSymbol} />
                </div>
                <div className="border-b border-grey-2 flex">
                    {tabs.map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-6 py-3 font-semibold transition-colors ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                        {tab}
                    </button>
                    ))}
                </div>
                <div>{renderTabContent()}</div>
            </div>
        </div>

        <aside className="w-full lg:w-1/3 flex-shrink-0">
            {isSubscribed ? (
                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                    <h4 className="font-bold text-xl mb-2">Управление</h4>
                    <div className="space-y-3 mb-4">
                        <div className="flex justify-between items-center">
                            <span className="text-text-grey">Статус</span>
                            <span className={`font-semibold ${isActive ? 'text-green-500' : 'text-orange'}`}>{isActive ? 'Активен' : 'Остановлен'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-text-grey">PNL</span>
                            <span className="font-semibold text-green-500">+$520.15</span>
                        </div>
                    </div>
                    <Button 
                        variant={isActive ? 'small-outline' : 'small-classic'}
                        onClick={() => setIsActive(!isActive)}
                        className={`w-full ${isActive ? '!border-orange !text-orange hover:!bg-orange hover:!text-white' : '!bg-green-service'}`}>
                        {isActive ? 'Остановить' : 'Активировать'}
                    </Button>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                    <p className="text-4xl font-bold text-center mb-2">{signal.profit}%</p>
                    <p className="text-center text-text-grey mb-4">комиссия</p>
                    <div className="flex flex-col gap-3">
                        <Button variant="big-classic" className="w-full">Подключиться</Button>
                        <Button variant="big-outline" className="w-full">Демо</Button>
                    </div>
                </div>
            )}
        </aside>
      </div>
    </div>
  );
};

export default SignalDetailsPage;
