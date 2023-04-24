import React from 'react'
import {MdShoppingBasket} from 'react-icons/md';
import {motion} from 'framer-motion';
const RowContainer = ({flag}) => {
  return (
    <div className={`w-full ${flag ? 'overflow-scroll': 'overflow-x-hidden' }`}>
        
        <div className='w-300 md:w-225  h-auto my-12 backdrop-blur-lg '>
            <div className='w-full flex items-center justify-between'>
                <img src='https://firebasestorage.googleapis.com/v0/b/restaurantapp-c95ea.appspot.com/o/imgaes%2F1682302466627-i7.png?alt=media&token=820c8725-4b8d-4ed6-8822-6c0e84cfe636'className='w-40 -mt-8'  alt='' />
                <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-full bg-pink-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                    <MdShoppingBasket className='text-white'/>

                </motion.div>
            </div>
        </div>
         </div>
  )
}

export default RowContainer