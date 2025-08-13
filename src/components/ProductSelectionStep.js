
import React from 'react';
import { Button } from '../App'; // Assuming Button is exported from App.js

const ProductSelectionStep = ({ onSelectProduct }) => {
  const products = ['Алго бот', 'Сигнал', 'Услуги', 'Софт', 'Дополнительно'];

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-center mb-2 font-tt-travels">ВЫБОР ПРОДУКТА</h2>
      <p className="text-center text-text-grey mb-8">Выберите, какой продукт вы хотите создать</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product, index) => (
          <Button 
            key={product} 
            variant='big-outline' 
            className="w-full justify-center" 
            onClick={() => onSelectProduct(product)}
            disabled={index !== 0} // Disable all but the first button
          >
            {product}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ProductSelectionStep;
