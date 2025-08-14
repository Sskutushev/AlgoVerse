import React, { useState } from 'react';
import { Button } from '../App';
import { notificationsData } from '../data/notificationsData';

const NotificationIcon = ({ type }) => {
  const icons = {
    comment: '💬',
    mention: '@',
    support: '🛠️',
    system: '⚙️',
    repost: '🔁',
    bonus: '🎁',
    discount: '🔥',
    investment: '📈',
    payment: '💳',
    vote: '🗳️',
  };
  return <span className="text-2xl">{icons[type] || '🔔'}</span>;
};

const Switch = ({ label }) => {
  const [isOn, setIsOn] = useState(true);
  return (
    <div className="flex items-center justify-between py-2">
      <div 
        onClick={() => setIsOn(!isOn)}
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${isOn ? 'bg-[#25DE85]' : 'bg-gray-300'}`}>
        <div className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${isOn ? 'translate-x-5' : ''}`} />
      </div>
      <span className="text-gray-700 flex-grow ml-4">{label}</span>
    </div>
  );
};

const NotificationsPage = ({ onBack, onNavigate }) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 md:p-8">
        
        <header className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Назад
          </button>
          <h1 className="text-3xl font-bold text-gray-800">Уведомления</h1>
          <div className="relative">
            <Button 
              variant='small-classic'
              onClick={() => setSettingsOpen(!settingsOpen)} 
            >
              <img src={`${process.env.PUBLIC_URL}/wheel.svg`} alt="Настройки" className="w-5 h-5 mr-2" />
              Настройки
            </Button>
            {settingsOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-10 p-4 border border-gray-200">
                <p className="font-bold text-lg mb-2">Настройки уведомлений</p>
                <Switch label="Пользовательская активность" />
                <Switch label="Платежные оповещения" />
                <Switch label="Техподдержка" />
                <Switch label="Системные оповещения" />
                <Switch label="Инвестиционные" />
                <div className="mt-4">
                  <Button variant='small-classic' className="w-full">Сохранить</Button>
                </div>
              </div>
            )}
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 space-y-4">
          {notificationsData.map(notification => (
            <div key={notification.id} className="flex items-center p-4 rounded-lg border border-gray-200 hover:shadow-md hover:border-orange-300 transition-all duration-300 cursor-pointer relative">
              <div className="flex-shrink-0 mr-4">
                <NotificationIcon type={notification.type} />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800">{notification.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{notification.text}</p>
                {notification.title === 'Ваше обращение в поддержку' && (
                  <button 
                    onClick={() => onNavigate('Сообщения')}
                    className="mt-2 bg-white text-gray-700 font-semibold px-3 py-1 rounded-md text-sm hover:bg-gray-100 transition-colors border border-gray-300">
                    Читать ответ
                  </button>
                )}
              </div>
              <div className="flex-shrink-0 text-right ml-4">
                <div className="text-xs text-gray-500">
                  <span>{notification.time}</span>
                  <span className="mx-2">|</span>
                  <span>{notification.date}</span>
                </div>
              </div>
              {!notification.read && (
                <div className="absolute top-4 right-4 w-3 h-3 bg-[#AA1D00] rounded-full"></div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default NotificationsPage;
