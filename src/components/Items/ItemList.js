import React from 'react'
import Item from './Item';
import styled from 'styled-components';


const ItemList = ({ addToBasket, data }) => {


    return (
        <div>
            <StyledDiv>
                <i className='fa fa-leaf' aria-hidden="true"></i>
                <h1>Groceries</h1>
            </StyledDiv>
            <ul>
                {data.map(item =>
                    <Item item={item} addToBasket={addToBasket} />
                )}
            </ul>
        </div>
    )
}
const StyledDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
i{
    font-size: 1.5rem;
    margin:0rem 2rem;
    color: #14a5867d;
}
    h1{
        width:100vw;
    }
`;

export default ItemList;
