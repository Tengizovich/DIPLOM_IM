import React, { useState } from 'react';

const Basket = () => {
    const [items, setItems] = useState([]);

    const addToBasket = (item) => {
        setItems([...items, item]);
    };

    const removeFromBasket = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (
        <div>
            <h2>Basket</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeFromBasket(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Basket;