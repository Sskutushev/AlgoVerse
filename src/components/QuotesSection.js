
import React from 'react';
import { quotesData } from '../data/quotesData';

const InstrumentCard = ({ instrument, onNavigate }) => (
  <button onClick={() => onNavigate(`instrument/${instrument.id}`)} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between text-left">
    <div>
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-lg text-text-black">{instrument.name}</h4>
        <span className={`font-bold ${instrument.changeColor}`}>{instrument.change}</span>
      </div>
      <p className="text-2xl text-text-grey mt-2">{instrument.price}</p>
    </div>
  </button>
);

const QuotesSection = ({ onNavigate }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Сегмент Валюты */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-text-black">Валюты</h3>
            <div className="grid grid-cols-2 gap-4">
              {quotesData.currencies.map(item => (
                <InstrumentCard key={item.id} instrument={item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>

          {/* Сегмент Криптовалюты */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-text-black">Криптовалюты</h3>
            <div className="grid grid-cols-2 gap-4">
              {quotesData.crypto.map(item => (
                <InstrumentCard key={item.id} instrument={item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>

          {/* Сегмент Фондовый рынок */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-text-black">Фондовый рынок</h3>
            <div className="grid grid-cols-2 gap-4">
              {quotesData.stocks.map(item => (
                <InstrumentCard key={item.id} instrument={item} onNavigate={onNavigate} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default QuotesSection;
