import React, { useState } from 'react';
import './App.css';
import ItemList from './components/Items/ItemList';
import BasketItem from './components/Basket/BasketItem';
import { groceryData, basketData } from './util';
import styled from 'styled-components';

const App = () => {
  const [groceryList, setGroceryList] = useState(groceryData)
  const [basket, setBasket] = useState(basketData);
  const [input, setInput] = useState('');

  const addToBasketHandler = (item) => {
    const exist = basket.find((x) => x.id === item.id);
    if (exist) {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setBasket([...basket, { ...item, qty: 1 }]);
    }
  }

  const removeItem = (item) => {

    const exist = basket.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setBasket(basket.filter((x) => x.id !== item.id));
    } else {
      setBasket(
        basket.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  const emptyBasketHandler = () => {
    setBasket([]);
  }

  const inputhandler = (e) => {
    setInput(e.target.value)
  }
  const filtered = groceryList.filter(item => {
    return item.name.toLowerCase().includes(input.toLowerCase());
  })

  return (
    <StyledDiv>
      <header>
        <i className='fa fa-shopping-basket'></i>
        <h1>Grocery Basket</h1>
      </header>
      <input type='text' placeholder='Search for grocery...' onChange={inputhandler} />
      <div>
        <ItemList data={filtered} addToBasket={addToBasketHandler} />
        <BasketItem basket={basket} removeItem={removeItem} deleteBasket={emptyBasketHandler} />
      </div>
    </StyledDiv>
  )
};

const StyledDiv = styled.div`
  header{
    background:black;
    color:white;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height:15vh;
    width: 100vw;
    i{
      font-size:3rem;
      margin:0rem 2rem;
    }
    h1{
      font-size: 3rem;
    }
  }  
  input{
    width: 40vw;
    padding: 1vh 0 1vh 1vw;
    margin: 2vh;
    font-family: 'caveat', cursive;
  }
  div{
    float: left;
  }
`;

export default App;
