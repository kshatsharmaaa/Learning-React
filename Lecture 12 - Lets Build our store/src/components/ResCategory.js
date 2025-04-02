import React, { useState } from 'react'
import ItemList from './ItemList';

const ResCategory = ({data, showItems, setShowIndex, dummy}) => {
    // console.log(data);

    /* this hsould be controlled by its parent i.e. restaurant menu 
  const [showItems, setShowItems] = useState(false) */
  const handleClick = () => {
    // setShowItems(!showItems);
    setShowIndex()
  }
    
  return (
    <div className="">
        {/* header */}
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className='font-bold text-md'>{data.title} ({data.itemCards.length})</span>
            <span>👇🏻</span>
        </div>

        {/* body */}
        {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
        </div>
        
    </div>
  )
}

export default ResCategory
