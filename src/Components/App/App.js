import React from 'react';
import Product from '../Product/Product'
import './App.css';

const productsList = [
  {
    productId: '00001',
    productType: 'с фуа гра',
    productKit: `<strong>10</strong> порций <br/> мышь в подарок`,
    productWeight: '0,5',
    productDescription: 'Печень утки разварная с артишоками.',
    isAvailable: false,
    
  },
  {
    productId: '00002',
    productType: 'c рыбой',
    productKit: '<strong>40</strong> порций <br/> 2 мыши в подарок',
    productWeight: '2',
    productDescription: 'Головы щучьи с чесноком да свежайшая семгушка',
    isAvailable: true,
  },
  {
    productId: '00003',
    productType: 'с курой',
    productKit: '<strong>100</strong> порций <br/> 5 мышей в подарок <br/> заказчик доволен',
    productWeight: '5',
    productDescription: 'Филе из цыплят с трюфелями в бульоне',
    isAvailable: true,
  },
]

function renderProducts (product) {

  return <Product
    key = {product.productId}
    productType = {product.productType}
    productKit = {product.productKit}
    productWeight = {product.productWeight}
    productDescription = {product.productDescription}
    isAvailable = {product.isAvailable}
  />
};

function App() {
  return (
    <div className="App">
      <div className="products-list">
        <div className="products-list__title">
          Ты сегодня покормил кота?
        </div>
        <div className="products-list__wrapper">
            {productsList.map(renderProducts)}
        </div>
      </div>
    </div>
  );
}

export default App;
