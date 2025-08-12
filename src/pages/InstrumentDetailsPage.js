import React from 'react';
import { Button, ICONS } from '../App'; // Assuming these are exported from App.js
import { TradingViewWidget } from './SignalDetailsPage'; // Re-using the widget

const mockNews = [
  { id: 1, headline: 'ФРС сохраняет процентные ставки без изменений, ссылаясь на умеренный экономический рост.', source: 'Bloomberg' },
  { id: 2, headline: 'Аналитики прогнозируют рост BTC до $80,000 на фоне увеличения институционального интереса.', source: 'CoinDesk' },
  { id: 3, headline: 'Технологический сектор показывает лучшие результаты на этой неделе, Nasdaq 100 обновляет максимумы.', source: 'Reuters' },
  { id: 4, headline: 'ЕЦБ сигнализирует о возможном снижении ставок в следующем квартале, EUR/USD под давлением.', source: 'Financial Times' },
];

const InstrumentDetailsPage = ({ instrument, onBack }) => {
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
      
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <div className="w-full h-[550px] mb-6">
            <TradingViewWidget symbol={instrument.tradingViewSymbol} />
        </div>

        <div>
            <h3 className="font-bold text-xl mb-4">Новостная сводка</h3>
            <div className="space-y-4">
                {mockNews.map(news => (
                    <div key={news.id} className="border-b border-grey-2 pb-3">
                        <a href="#!" className="text-blue-600 hover:underline">
                            {news.headline}
                        </a>
                        <p className="text-xs text-text-grey mt-1">Источник: {news.source}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default InstrumentDetailsPage;