import React from 'react';
import styled from 'styled-components';

const Basket = ({ item, removeItem }) => {
    return (
        <StyledDiv>
            <li key={item.id} onClick={() => removeItem(item)}  >
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <h4>{item.qty}</h4>
            </li>
        </StyledDiv>
    )
};


const StyledDiv = styled.div`
    background: #dbdbdb;
    border-radius: 10rem;
    width:12rem;
    margin:1rem;
    cursor: pointer;
    transition: background 1s ease;
    &:hover{
        background: #f04c367c;
    }
    li{
        text-decoration: none;
        display:flex;
    }
    img{
        width:3rem;
        height:3rem;
        object-fit: cover;
        border-radius: 50%;
        margin:0.4rem;
    }
    h3{
        font-size: 1.3rem;
        padding: 1rem 0rem;
    }
    h4{
        margin:1.2rem 1rem;
    }
    
`;


export default Basket
