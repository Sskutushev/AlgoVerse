import React from 'react';
import { ICONS } from '../App'; // Assuming ICONS are exported from App.js

const QuotesSection = ({ quotesData, onInstrumentClick }) => {
  const segments = ['Валюты', 'Криптовалюты', 'Фондовый рынок'];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {segments.map(segment => (
          <div key={segment}>
            <h3 className="font-bold text-lg mb-2 px-2">{segment}</h3>
            <div className="space-y-2">
              {quotesData.filter(item => item.segment === segment).map(item => (
                <button key={item.name} onClick={() => onInstrumentClick(item)} className="w-full flex justify-between items-center p-2 rounded-lg hover:bg-grey-1/50">
                  <span className="font-semibold">{item.name}</span>
                  <div className='text-right'>
                    <span className="font-semibold">{item.price}</span>
                    <span className={`ml-2 text-sm font-semibold ${item.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                      {item.change}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesSection;