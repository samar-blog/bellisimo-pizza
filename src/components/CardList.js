import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardList = ({ products, addToCart }) => { /**CARDLARNI LIST QILISH VA LOADER */
    const [delay, setDelay] = useState(true); //default holatda loader ko'rinadi

    useEffect(() => {
        setDelay(true);
        setTimeout(() => {
            setDelay(false) //5s sekundan keyin loader o'chadi false qiymatga o'tadi
        }, 2000) 
    }, [products])
    
    return (
        <>
            {
                delay ? <div className='spinner'>
                    <span className='loader'></span>
                </div>
                :
                <>
                    <div className='card-list'>
                        {
                            products.length === 0 ? <p>Нет продукты!</p> : 
                            products.map(item => {
                                return(
                                    <Card key={item.id} data={item} addToCart={addToCart} />
                                )
                            })
                        }
                    </div>
                </>
            }
        </>
    );
};

export default CardList;