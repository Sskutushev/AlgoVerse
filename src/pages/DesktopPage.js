import React, { useState } from 'react';
import { ICONS, Button, BotCard } from '../App'; // Assuming these are exported from App.js

// Mock data for signals - using chart images
export const signalData = [
  { id: 1, name: 'Сигнал по BTC/USD', description: 'Краткосрочные сигналы на основе анализа объемов и волатильности для пары BTC/USD.', chart: '/chart1.jpg', profit: 25, risk: 'Низкий', value: 1250.50, pnl_percentage: 41.6, tradingViewSymbol: 'BINANCE:BTCUSDT' },
  { id: 2, name: 'Трендовый сигнал ETH', description: 'Среднесрочные сигналы для торговли по тренду на Ethereum. Идеально для позиционной торговли.', chart: '/chart2.jpg', profit: 45, risk: 'Средний', value: 990.00, pnl_percentage: 33.0, tradingViewSymbol: 'BINANCE:ETHUSDT' },
  { id: 3, name: 'Скальпинг на S&P 500', description: 'Высокочастотные сигналы для скальпинга фьючерса на индекс S&P 500.', chart: '/chart3.jpg', profit: 75, risk: 'Высокий', value: 760.00, pnl_percentage: 25.4, tradingViewSymbol: 'SP:SPX' },
];

const pnlChartData = {
    total_pnl: 42.19,
    signals: [
        { name: 'Сигнал по BTC/USD', value: 1250.50, percentage: 41.6, color: '#4F46E5' },
        { name: 'Трендовый сигнал ETH', value: 990.00, percentage: 33.0, color: '#10B981' },
        { name: 'Скальпинг на S&P 500', value: 760.00, percentage: 25.4, color: '#F59E0B' },
    ]
};

const FundsPanel = () => {
  const [currency, setCurrency] = useState('USD');
  const currencies = ['USD', 'JPY', 'RUB', 'EUR', 'GBP', 'CNY'];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 md:gap-6">
            <div className="flex items-baseline gap-4">
                <div className="text-center md:text-left">
                <p className="text-sm text-text-grey">Общая сумма активов</p>
                <p className="font-bold text-2xl md:text-3xl">$ 6273</p>
                </div>
                <p className="font-semibold !text-green-500 text-lg">+102%</p>
            </div>
            <div className="text-center md:text-left">
                <p className="text-sm text-text-grey">Свободные средства</p>
                <p className="font-bold text-2xl md:text-3xl">$ 3,000.30</p>
            </div>
            <div className="flex items-center gap-4 ml-auto">
                <select value={currency} onChange={(e) => setCurrency(e.target.value)} className="bg-grey-1 border border-grey-2 rounded-full px-4 py-2 font-semibold">
                {currencies.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <Button variant="small-outline">Ввод</Button>
                <Button variant="small-classic">Вывод</Button>
            </div>
        </div>
    </div>
  );
};

const PnlChart = ({ data }) => {
    const radius = 80;
    const strokeWidth = 25;
    const circumference = 2 * Math.PI * radius;
    let offset = 0;

    return (
        <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="relative w-52 h-52">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Background Circle */}
                    <circle cx="100" cy="100" r={radius} fill="transparent" stroke="#e5e7eb" strokeWidth={strokeWidth} />
                    
                    {/* Segments */}
                    {data.signals.map((signal, index) => {
                        const dasharray = (circumference * signal.percentage) / 100;
                        const segment = <circle key={index} cx="100" cy="100" r={radius} fill="transparent" stroke={signal.color} strokeWidth={strokeWidth} strokeDasharray={`${dasharray} ${circumference - dasharray}`} strokeDashoffset={-offset} transform="rotate(-90 100 100)" />;
                        offset += dasharray;
                        return segment;
                    })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="bg-white w-32 h-32 rounded-full flex flex-col items-center justify-center">
                        <span className="font-bold text-2xl">{`${data.total_pnl}%`}</span>
                        <span className="text-sm text-text-grey">общий PNL</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                {data.signals.map((signal, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: signal.color }}></div>
                        <div className="flex-grow">
                            <p className="font-semibold">{signal.name}</p>
                            <p className="text-sm text-text-grey">{`$ ${signal.value.toFixed(2)}`}</p>
                        </div>
                        <div className="font-semibold text-right">{`${signal.percentage.toFixed(1)}%`}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ProfitDynamicsChart = () => (
    <div className="w-full">
        <svg viewBox="0 0 400 250">
            {/* Y-axis labels and grid lines */}
            <g className="text-xs text-gray-400">
                <text x="0" y="15" fill="currentColor">50%</text>
                <line x1="30" x2="400" y1="10" stroke="#e5e7eb" strokeWidth="1" />
                <text x="0" y="80" fill="currentColor">25%</text>
                <line x1="30" x2="400" y1="75" stroke="#e5e7eb" strokeWidth="1" />
                <text x="0" y="145" fill="currentColor">0%</text>
                <line x1="30" x2="400" y1="140" stroke="#e5e7eb" strokeWidth="1" />
            </g>
            {/* X-axis labels */}
            <g className="text-xs text-gray-400">
                <text x="50" y="160" fill="currentColor">Июнь</text>
                <text x="180" y="160" fill="currentColor">Июль</text>
                <text x="320" y="160" fill="currentColor">Авг</text>
            </g>
            {/* Line Chart Path */}
            <path d="M 40 120 C 100 100, 150 40, 220 60 C 290 80, 350 20, 380 10" stroke="#4F46E5" strokeWidth="3" fill="none" />
             {/* Placeholder for hover interaction */}
            <circle cx="380" cy="10" r="5" fill="#4F46E5" />
            <g transform="translate(330, 5)">
                <rect width="60" height="20" fill="#4F46E5" rx="5" />
                <text x="30" y="14" textAnchor="middle" fill="white" fontSize="10">+42.19%</text>
            </g>
        </svg>
    </div>
);

const AnalyticsSection = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <h3 className="font-bold text-xl mb-4">PNL по сигналам</h3>
                <PnlChart data={pnlChartData} />
            </div>
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="flex flex-wrap justify-between items-center mb-4 gap-2">
                    <h3 className="font-bold text-xl">Динамика прибыли</h3>
                    <div className="flex items-center gap-2">
                        <select className="bg-grey-1 border border-grey-2 rounded-full px-3 py-1 text-sm font-semibold">
                            <option>общая по всем</option>
                            <option>по сигналам</option>
                        </select>
                        <select className="bg-grey-1 border border-grey-2 rounded-full px-3 py-1 text-sm font-semibold">
                            <option>За месяц</option>
                            <option>За квартал</option>
                            <option>За год</option>
                            <option>За всё время</option>
                        </select>
                    </div>
                </div>
                <ProfitDynamicsChart />
            </div>
        </div>
    );
};

export const SignalCard = ({ signal, onDetailsClick }) => (
    <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col transform hover:-translate-y-1 transition-all duration-300 h-full">
        <div className="relative mb-4">
            <img src={`${process.env.PUBLIC_URL}${signal.chart}`} alt={signal.name} className="w-full h-48 object-cover rounded-lg"/>
        </div>
        <h3 className="font-tt-travels text-xl font-bold mb-2">{signal.name}</h3>
        <p className="text-text-grey text-sm mb-4 flex-grow">{signal.description}</p>
        <div className="flex items-center justify-between text-sm mb-4">
            <div className="text-center">
                <p className="text-text-grey">Прибыль</p>
                <p className="font-bold text-green-500">+{signal.profit}%</p>
            </div>
            <div className="text-center">
                <p className="text-text-grey">Риск</p>
                <p className="font-bold">{signal.risk}</p>
            </div>
        </div>
        <Button variant="small-outline" icon={ICONS.arrowRight} iconPosition="right" onClick={onDetailsClick} className="w-full !border-orange !text-orange hover:!bg-orange hover:!text-white">
            Подробнее
        </Button>
    </div>
);

const DesktopPage = ({ botData, onBotDetailsClick, onSignalDetailsClick }) => {
  const [activeTab, setActiveTab] = useState('Алго-боты');
  const tabs = ['Алго-боты', 'Сигналы'];

  // Mock purchased items
  const purchasedBots = botData.slice(0, 4);

  const renderContent = () => {
    switch (activeTab) {
      case 'Алго-боты':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {purchasedBots.map((bot, index) => (
              <BotCard key={index} bot={bot} onDetailsClick={() => onBotDetailsClick(bot)} isPurchased={true} />
            ))}
          </div>
        );
      case 'Сигналы':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {signalData.map((signal) => (
              <SignalCard key={signal.id} signal={signal} onDetailsClick={() => onSignalDetailsClick(signal)} />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <FundsPanel />
      <AnalyticsSection />
      <div>
        <h2 className="font-bold text-2xl mb-4">Приобретенные продукты</h2>
        <div className="bg-white rounded-2xl shadow-sm p-4">
            <div className="border-b border-grey-2 flex items-center justify-between flex-wrap">
                <nav className="flex">
                    {tabs.map(tab => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 md:px-6 py-3 font-semibold transition-colors text-sm md:text-base ${activeTab === tab ? 'text-main border-b-2 border-main' : 'text-text-grey hover:bg-grey-2/30'}`}>
                        {tab}
                    </button>
                    ))}
                </nav>
            </div>
            <div className="p-4">
                {renderContent()}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopPage;