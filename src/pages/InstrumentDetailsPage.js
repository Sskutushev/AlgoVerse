import React from 'react';
import { Button, ICONS } from '../App'; // Assuming these are exported from App.js
import { TradingViewWidget } from './SignalDetailsPage'; // Re-using the widget

const mockNews = [
  { id: 1, headline: 'ФРС сохраняет процентные ставки без изменений, ссылаясь на умеренный экономический рост.', source: 'Bloomberg', time: '2 часа назад' },
  { id: 2, headline: 'Аналитики прогнозируют рост BTC до $80,000 на фоне увеличения институционального интереса.', source: 'CoinDesk', time: '5 часов назад' },
  { id: 3, headline: 'Технологический сектор показывает лучшие результаты на этой неделе, Nasdaq 100 обновляет максимумы.', source: 'Reuters', time: '1 день назад' },
  { id: 4, headline: 'ЕЦБ сигнализирует о возможном снижении ставок в следующем квартале, EUR/USD под давлением.', source: 'Financial Times', time: '2 дня назад' },
  { id: 5, headline: 'Новые данные по инфляции могут повлиять на решение ЦБ по ключевой ставке.', source: 'РБК', time: '3 дня назад' },
  { id: 6, headline: 'Золото достигло нового исторического максимума на фоне геополитической напряженности.', source: 'Ведомости', time: '4 дня назад' },
];

const InstrumentDetailsPage = ({ instrument, onBack }) => {
  const randomValue = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="icon" onClick={onBack} className="mr-4">
          {React.createElement(ICONS.arrowLeft)}
        </Button>
        <div>
            <h2 className="font-bold text-2xl">{instrument.name}</h2>
            <p className="text-sm text-text-grey">Источник данных: TradingView</p>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column: Chart, Description, News */}
        <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm p-6">
          <h3 className="font-bold text-xl mb-4">Обзор {instrument.name}</h3>
          <p className="text-text-grey mb-6">
            {instrument.description || `Краткое описание ${instrument.name}: это финансовый инструмент, который позволяет трейдерам спекулировать на изменении его стоимости. Он широко используется для диверсификации портфеля и хеджирования рисков. Торговля ${instrument.name} может принести значительную прибыль при правильном анализе рынка и управлении рисками.`}
          </p>
          <div className="w-full h-[400px] mb-6">
              <TradingViewWidget symbol={instrument.tradingViewSymbol} />
          </div>

          <div>
              <h3 className="font-bold text-xl mb-4">Новости по {instrument.name}</h3>
              <div className="space-y-4">
                  {mockNews.map(news => (
                      <div key={news.id} className="border-b border-grey-2 pb-3">
                          <a href="#!" className="text-blue-600 hover:underline">
                              {news.headline}
                          </a>
                          <p className="text-xs text-text-grey mt-1">Источник: {news.source} - {news.time}</p>
                      </div>
                  ))}
              </div>
          </div>
        </div>

        {/* Right Column: Key Metrics */}
        <aside className="w-full lg:w-1/3 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Ключевые метрики</h3>
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Текущая цена</span>
                        <span className="font-semibold">${instrument.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Дневной диапазон</span>
                        <span className="font-semibold">${randomValue(instrument.price * 0.9, instrument.price * 1.1)} - ${randomValue(instrument.price * 0.9, instrument.price * 1.1)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Открытие</span>
                        <span className="font-semibold">${randomValue(instrument.price * 0.95, instrument.price * 1.05)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Закрытие (пред.)</span>
                        <span className="font-semibold">${randomValue(instrument.price * 0.95, instrument.price * 1.05)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Объем торгов (24ч)</span>
                        <span className="font-semibold">{Math.floor(Math.random() * 100000000).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-text-grey">Рыночная капитализация</span>
                        <span className="font-semibold">${(Math.random() * 1000000000000).toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                    </div>
                </div>
            </div>
        </aside>
      </div>
    </div>
  );
};

export default InstrumentDetailsPage;