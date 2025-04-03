import React from 'react'
import { CDN_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemList = ({items, dummy}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item)); // dispatch is a function
  }

  return (
    <div className="">
        {items.map((item) => (
            <div className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between" key={item.card.info.id}>
                <div className="w-9/12">
                    <div className="py-2">
                        <span className='font-semibold'>{item.card.info.name} </span>
                        <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4">
                <div className="absolute">
                    <button className='p-1 mx-16 rounded-lg bg-black shadow-lg cursor-pointer m-auto text-green-400' 
                    onClick = {() => handleAddItem(item)
                    }>Add + </button>
                </div>
                <img src={"https://www.shutterstock.com/image-photo/fried-salmon-steak-cooked-green-600nw-2489026949.jpg"} className='w-full' alt="cloudinary img id not working" />
            </div>
        </div>
        ))}
    </div>
  );
}

export default ItemList
