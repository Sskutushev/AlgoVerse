
import React, { useState } from 'react';
import { Button, ICONS } from '../App'; // Assuming these are exported from App.js

const MultiSelectDropdown = ({ title, options, selectedOptions, onToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <label className="font-semibold mb-1 block">{title}</label>
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full p-3 border border-grey-2 rounded-lg text-left flex justify-between items-center">
        <span>{selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Выберите тип'}</span>
        <ICONS.chevronDown />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border border-grey-2 rounded-lg mt-1 shadow-lg">
          {options.map(option => (
            <label key={option} className="flex items-center p-3 hover:bg-grey-2/30 cursor-pointer">
              <input 
                type="checkbox" 
                className="form-checkbox text-main focus:ring-main rounded"
                checked={selectedOptions.includes(option)}
                onChange={() => onToggle(option)}
              />
              <span className="ml-3">{option}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};



const AlgoBotCreationForm = ({ onSave, onBack, initialData = {}, showTerms = true, showActions = true }) => {
  const [productName, setProductName] = useState(initialData.productName || '');
  const [productType, setProductType] = useState(initialData.productType || 'Эксперты');
  const [accountType, setAccountType] = useState(initialData.accountType || 'Любой');
  const [expertTypes, setExpertTypes] = useState(initialData.expertTypes || []);
  const [pricing, setPricing] = useState(initialData.pricing || [
    { enabled: false, price: '', period: '1 месяц' },
    { enabled: false, price: '', period: '3 мес' },
    { enabled: false, price: '', period: '6 мес' },
    { enabled: false, price: '', period: '1 год' },
    { enabled: false, price: '', period: 'безлимитное использование' },
  ]);
  const [activations, setActivations] = useState(initialData.activations || 5);
  const [agreedToTerms, setAgreedToTerms] = useState(initialData.agreedToTerms || false);

  const handleExpertTypeToggle = (option) => {
    setExpertTypes(prev => 
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };

  const handlePricingChange = (index, field, value) => {
    const newPricing = [...pricing];
    newPricing[index][field] = value;
    setPricing(newPricing);
  };

  const handleSave = () => {
      const productData = {
          productName,
          productType,
          accountType,
          expertTypes,
          pricing,
          activations,
          agreedToTerms
      };
      onSave(productData);
  }

  return (
    <>
      <div className="space-y-6">
        <div>
          <label className="font-semibold mb-1 block">Название</label>
          <input type="text" placeholder="Название продукта..." className="w-full p-3 border border-grey-2 rounded-lg" value={productName} onChange={e => setProductName(e.target.value)} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="font-semibold mb-1 block">Продукт</label>
            <select className="w-full p-3 border border-grey-2 rounded-lg" value={productType} onChange={e => setProductType(e.target.value)}>
              <option>Эксперты</option>
              <option>Индикаторы</option>
              <option>Утилиты</option>
            </select>
          </div>
          <div>
            <label className="font-semibold mb-1 block">Тип счета</label>
            <select className="w-full p-3 border border-grey-2 rounded-lg" value={accountType} onChange={e => setAccountType(e.target.value)}>
              <option>Любой</option>
              <option>Неттинг</option>
              <option>Хеджинг</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <MultiSelectDropdown 
              title="Тип эксперта"
              options={['Арбитражный', 'Скальпирующий', 'Трендовые', 'Мартингейл', 'Хеджирующие', 'Сеточные', 'Новостные', 'Мультивалютные', 'Нейросети']}
              selectedOptions={expertTypes}
              onToggle={handleExpertTypeToggle}
            />
          </div>
        </div>

        <div>
          <label className="font-semibold mb-1 block">Цена</label>
          <div className="space-y-2 p-4 border border-grey-2 rounded-lg">
            {pricing.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded" checked={item.enabled} onChange={e => handlePricingChange(index, 'enabled', e.target.checked)} />
                <input type="number" placeholder="0.00" className="w-24 p-2 border border-grey-2 rounded-lg" value={item.price} onChange={e => handlePricingChange(index, 'price', e.target.value)} disabled={!item.enabled} />
                <span className="text-text-grey">USD</span>
                <span>на {item.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="font-semibold mb-1 block">Активации</label>
          <div className="bg-grey-2/30 p-4 rounded-lg">
            <p className="text-sm text-text-grey mb-2">Укажите, сколько раз покупатель сможет активировать ваш продукт. Активация привязывает приложение к конкретному компьютеру, защищая от несанкционированного копирования. Для запуска на другом устройстве потребуется новая активация. Если лимит будет исчерпан, покупателю нужно будет приобрести продукт снова.</p>
            <input type="number" className="w-full p-3 border border-grey-2 rounded-lg" value={activations} onChange={e => setActivations(Math.max(5, Math.min(20, Number(e.target.value))))} min="5" max="20" />
          </div>
        </div>

        {showTerms && (
          <div>
            <label className="flex items-center cursor-pointer">
              <input type="checkbox" className="form-checkbox text-main focus:ring-main rounded" checked={agreedToTerms} onChange={e => setAgreedToTerms(e.target.checked)} />
              <span className="ml-2 text-sm">Я согласен с <a href="#!" className="text-main hover:underline">правилами и условиями</a> платформы о распространении программного обеспечения.</span>
            </label>
          </div>
        )}
      </div>
      {showActions && (
        <div className="flex gap-4 mt-8">
          {onBack && <Button variant="big-outline" onClick={onBack}>Назад</Button>}
          <Button variant="big-classic" className="w-full" onClick={handleSave} disabled={!agreedToTerms}>Сохранить черновик</Button>
        </div>
      )}
    </>
  );
};

export default AlgoBotCreationForm;
