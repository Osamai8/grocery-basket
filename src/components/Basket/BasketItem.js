import React from 'react';
import Basket from './Basket';
import styled from 'styled-components';

const Basketitem = ({ basket, deleteBasket, removeItem }) => {
    return (
        <div>
            <StyledDiv >

                <i className='fa fa-trash' onClick={deleteBasket} ></i>
                <h1>Basket Items</h1>
            </StyledDiv>
            <ul>
                {basket.map(item =>
                    <Basket removeItem={removeItem} deleteBasket={deleteBasket} item={item} />
                )}
            </ul>
        </div>
    )
};

const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
i{
    font-size: 1.5rem;
    margin:0rem 2rem;
    color: #f04c367c;
}
    h1{
        width:100vw;
    }
`;



export default Basketitem
