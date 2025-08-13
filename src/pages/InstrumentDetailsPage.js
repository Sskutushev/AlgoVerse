
import React from 'react';
import { allInstruments } from '../data/quotesData';
import TradingViewWidget from '../components/TradingViewWidget';

const InstrumentDetailsPage = ({ instrumentId, onBack }) => {
  const instrument = allInstruments.find(item => item.id === instrumentId);

  if (!instrument) {
    return <div className="text-center py-10">Инструмент не найден</div>;
  }

  return (
    <div className="bg-bg-light min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        {/* Кнопка Назад и Заголовок */}
        <div className="flex items-center mb-6">
          <button onClick={onBack} className="flex items-center text-lg font-semibold text-gray-700 hover:text-black">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            Назад
          </button>
          <h1 className="text-3xl font-bold text-text-black ml-6">{instrument.name}</h1>
        </div>

        {/* Карточка с информацией */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          
          {/* Сегмент и Источник */}
          <div className="flex justify-between items-center mb-6 pb-4 border-b">
            <span className="text-lg text-gray-600">{instrument.segment}</span>
            <span className="text-sm text-gray-500">Источник: {instrument.source}</span>
          </div>

          {/* Описание */}
          <div className="mb-8">
            <p className="text-base text-gray-800 mb-4">{instrument.description}</p>
            <p className="text-base text-gray-800 mb-4"><strong>История:</strong> {instrument.history}</p>
            <p className="text-base text-gray-800"><strong>Особенности торговли:</strong> {instrument.tradingInfo}</p>
          </div>

          {/* График */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-text-black mb-4">График цены</h2>
            <TradingViewWidget symbol={instrument.tradingViewSymbol} />
          </div>

          {/* Новости */}
          <div>
            <h2 className="text-2xl font-bold text-text-black mb-4">Новости</h2>
            <div className="space-y-4">
              {instrument.news.map((newsItem, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg text-gray-900">{newsItem.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">Источник: {newsItem.source} (ссылка неактивна)</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InstrumentDetailsPage;
